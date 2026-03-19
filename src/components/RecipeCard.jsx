import React from 'react'

function RecipeCard({ recipe }) {
  return (
    <div className="card bg-white w-96 shadow-xl border border-stone-100 overflow-hidden h-120">
      <figure className="h-48 shrink-0">
        <img
          src={recipe.image?.url}
          alt={recipe.title}
          className="object-cover w-full h-full"
          onError={(e) => { e.target.src = 'https://placehold.co/400x200?text=No+Image' }}
        />
      </figure>

      <div className="card-body p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300">
        <div className="flex justify-between items-start gap-2">
          <h2 className="card-title text-2xl font-bold text-stone-800">{recipe.title}</h2>
          <span className="badge badge-neutral shrink-0">{recipe.category}</span>
        </div>

        <p className="text-sm text-stone-600 mt-2">{recipe.description}</p>

        <div className="divider my-2"></div>

        <h3 className="font-bold text-stone-800">Ingredients</h3>
        <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <h3 className="font-bold text-stone-800 mt-4">Process</h3>
        <ol className="list-decimal list-inside text-sm text-stone-600 space-y-2">
          {recipe.process.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <h3 className="font-bold text-stone-800 mt-4">Nutritional Content</h3>
        <div className="overflow-x-auto mt-2 bg-stone-50 rounded-lg">
          <table className="table table-xs w-full">
            <thead>
              <tr className="text-stone-500">
                <th>Nutrient</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr><td>Calories</td><td>{recipe.calories} kcal</td></tr>
              <tr><td>Protein</td><td>{recipe.macros?.protein}</td></tr>
              <tr><td>Carbs</td><td>{recipe.macros?.carbs}</td></tr>
              <tr><td>Fats</td><td>{recipe.macros?.fats}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
