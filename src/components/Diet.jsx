import React, { useState } from 'react'

const DAILY_GOAL = 2000

function Diet() {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [results, setResults] = useState([])
  const [meals, setMeals] = useState([])
  const [error, setError] = useState('')

  // ── Search Open Food Facts (free, no API key) ─────────────
  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return
    setSearching(true)
    setError('')
    setResults([])
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=6`
      )
      const data = await res.json()
      const mapped = (data.products || [])
        .filter(p => p.product_name && p.nutriments?.['energy-kcal_100g'])
        .slice(0, 6)
        .map(p => ({
          id: p.code,
          name: p.product_name,
          calories: Math.round(p.nutriments['energy-kcal_100g'] || 0),
          protein: `${Math.round(p.nutriments['proteins_100g'] || 0)}g`,
          carbs: `${Math.round(p.nutriments['carbohydrates_100g'] || 0)}g`,
          fats: `${Math.round(p.nutriments['fat_100g'] || 0)}g`,
          per: 'per 100g'
        }))
      if (mapped.length === 0) setError('No results found. Try a different search term.')
      setResults(mapped)
    } catch {
      setError('Search failed. Check your connection.')
    } finally {
      setSearching(false)
    }
  }

  const addMeal = (item) => {
    setMeals(prev => [...prev, { ...item, uid: Date.now() }])
    setResults([])
    setQuery('')
  }

  const removeMeal = (uid) => setMeals(prev => prev.filter(m => m.uid !== uid))

  const totalCalories = meals.reduce((s, m) => s + m.calories, 0)
  const totalProtein  = meals.reduce((s, m) => s + parseInt(m.protein), 0)
  const totalCarbs    = meals.reduce((s, m) => s + parseInt(m.carbs), 0)
  const totalFats     = meals.reduce((s, m) => s + parseInt(m.fats), 0)
  const progress      = Math.min(Math.round((totalCalories / DAILY_GOAL) * 100), 100)

  return (
    <div className="min-h-screen py-10 px-6 font-['Candara']">
      <div className="max-w-4xl mx-auto">

        {/* ── Summary cards ───────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Calories', value: `${totalCalories} / ${DAILY_GOAL}`, sub: 'kcal' },
            { label: 'Protein',  value: `${totalProtein}g`,  sub: 'total' },
            { label: 'Carbs',    value: `${totalCarbs}g`,    sub: 'total' },
            { label: 'Fats',     value: `${totalFats}g`,     sub: 'total' },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
              <p className="text-stone-400 text-sm uppercase tracking-wide">{c.label}</p>
              <p className="text-2xl font-bold text-stone-800 mt-1">{c.value}</p>
              <p className="text-stone-400 text-xs">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Progress bar ────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-stone-500 mb-1">
            <span>Daily progress</span><span>{progress}%</span>
          </div>
          <progress className="progress progress-success w-full" value={progress} max="100"></progress>
        </div>

        {/* ── Search ──────────────────────────────────────── */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            className="input input-bordered w-full text-stone-800 bg-white"
            placeholder="Search a food, e.g. 'banana', 'oats', 'chicken breast'…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit" disabled={searching} className="btn btn-neutral min-w-24">
            {searching ? <span className="loading loading-spinner loading-xs"></span> : 'Search'}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* ── Search results ───────────────────────────────── */}
        {results.length > 0 && (
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm mb-8 overflow-hidden">
            {results.map(item => (
              <div key={item.id} className="flex justify-between items-center px-5 py-3 border-b border-stone-100 last:border-0">
                <div>
                  <p className="font-medium text-stone-800 capitalize">{item.name}</p>
                  <p className="text-xs text-stone-400">
                    {item.calories} kcal · P {item.protein} · C {item.carbs} · F {item.fats} · {item.per}
                  </p>
                </div>
                <button onClick={() => addMeal(item)} className="btn btn-sm btn-neutral">+ Add</button>
              </div>
            ))}
          </div>
        )}

        {/* ── Today's meals table ──────────────────────────── */}
        {meals.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <table className="table table-zebra w-full">
              <thead className="bg-stone-100">
                <tr>
                  <th>Meal</th><th>Calories</th><th>Protein</th><th>Carbs</th><th>Fats</th><th></th>
                </tr>
              </thead>
              <tbody>
                {meals.map(m => (
                  <tr key={m.uid}>
                    <td className="font-medium text-stone-800 capitalize">{m.name}</td>
                    <td>{m.calories} kcal</td>
                    <td>{m.protein}</td>
                    <td>{m.carbs}</td>
                    <td>{m.fats}</td>
                    <td>
                      <button onClick={() => removeMeal(m.uid)} className="btn btn-ghost btn-xs text-error">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {meals.length === 0 && results.length === 0 && !searching && (
          <p className="text-center text-stone-400 mt-16">Search for a food above to start tracking your meals.</p>
        )}

      </div>
    </div>
  )
}

export default Diet
