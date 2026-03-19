import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import { getRecipesAPI } from '../api/recipe.api'

const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack']

function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError('')
    const cat = category === 'All' ? '' : category
    getRecipesAPI(page, 12, cat)
      .then((res) => {
        const data = res.data.data
        setRecipes(data.docs)
        setTotalPages(data.totalPages)
      })
      .catch(() => setError('Could not load recipes. Is the backend running?'))
      .finally(() => setLoading(false))
  }, [category, page])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    setPage(1)
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────── */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-stone-900 font-['Candara']">Healthy Recipes</h1>
          <p className="text-stone-500 mt-2">Fuel your body with nutrient-dense meals.</p>
        </header>

        {/* ── Category filter ────────────────────────────── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`btn btn-sm rounded-full ${category === cat ? 'btn-neutral' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Content ────────────────────────────────────── */}
        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error && (
          <p className="text-center text-red-500 py-20">{error}</p>
        )}

        {!loading && !error && recipes.length === 0 && (
          <p className="text-center text-stone-400 py-20">
            No recipes found.{' '}
            <span className="text-stone-500 font-medium">
              Run <code className="bg-stone-100 px-1 rounded">node src/scripts/seedRecipes.js</code> in your backend to add some!
            </span>
          </p>
        )}

        {!loading && !error && recipes.length > 0 && (
          <>
            <div className="flex flex-wrap gap-8 justify-center">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </div>

            {/* ── Pagination ─────────────────────────────── */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="btn btn-sm btn-outline"
                >
                  ← Prev
                </button>
                <span className="btn btn-sm btn-ghost pointer-events-none">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="btn btn-sm btn-outline"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  )
}

export default Recipes
