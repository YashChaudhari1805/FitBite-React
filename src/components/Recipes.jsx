import React from "react";
import RecipeCard from "./RecipeCard";

function Recipes() {
    const recipesList = Array.from({ length: 20 });

    return (
        <div className="min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-stone-900 font-['Candara']">Healthy Recipes</h1>
                    <p className="text-stone-500 mt-2">Fuel your body with nutrient-dense meals.</p>
                </header>

                <div className="flex flex-wrap gap-8 justify-center">
                    {recipesList.map((_, index) => (
                        <RecipeCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recipes;