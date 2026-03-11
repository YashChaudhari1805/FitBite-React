import React from "react";
import Logo from "../assets/logo.jpeg";

function RecipeCard() {
    return (
        <div className="card bg-white w-96 shadow-xl border border-stone-100 overflow-hidden h-150">
            <figure className="h-48 shrink-0">
                <img src={Logo} alt="Recipe Placeholder" className="object-cover w-full h-full" />
            </figure>

            <div className="card-body p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300">
                <h2 className="card-title text-2xl font-bold text-stone-800">Classic Avocado Toast</h2>
                <p className="text-sm text-stone-600 mt-2">
                    A quick, healthy, and delicious breakfast staple packed with healthy fats.
                </p>

                <div className="divider my-2"></div>

                <h3 className="font-bold text-stone-800">Ingredients</h3>
                <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    <li>2 Slices of Whole Grain Bread</li>
                    <li>1 Ripe Avocado</li>
                    <li>Red Pepper Flakes & Sea Salt</li>
                    <li>1 Lemon Wedge</li>
                </ul>

                <h3 className="font-bold text-stone-800 mt-4">Process</h3>
                <ol className="list-decimal list-inside text-sm text-stone-600 space-y-2">
                    <li>Toast the bread until golden brown.</li>
                    <li>Mash the avocado in a bowl with lemon juice and salt.</li>
                    <li>Spread evenly over the toast.</li>
                    <li>Garnish with red pepper flakes and serve immediately.</li>
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
                            <tr><td>Calories</td><td>280 kcal</td></tr>
                            <tr><td>Protein</td><td>8g</td></tr>
                            <tr><td>Carbs</td><td>24g</td></tr>
                            <tr><td>Fats</td><td>18g</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;