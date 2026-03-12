import React, { useState } from "react";

function Diet() {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState([
        { id: 1, name: "Oatmeal with Blueberries", calories: 350, protein: "10g" },
        { id: 2, name: "Grilled Chicken Salad", calories: 450, protein: "35g" },
    ]);

    const dailyGoal = 2000;
    const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
    const progress = (totalCalories / dailyGoal) * 100;

    return (
        <div className="min-h-screen py-10 px-6 font-['Candara']">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="card bg-stone-100 p-6 shadow-sm border border-stone-200 flex flex-col items-center">
                        <div className="radial-progress text-primary" style={{ "--value": progress, "--size": "8rem" }} role="progressbar">
                            {progress}%
                        </div>
                        <p className="mt-4 font-bold text-stone-700">{totalCalories} / {dailyGoal} kcal</p>
                    </div>

                    <div className="md:col-span-2 card bg-neutral text-neutral-content p-6 shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Quick Log</h2>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="e.g., 2 eggs and toast"
                                className="input input-bordered w-full text-stone-800"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button className="btn btn-primary bg-stone-700 border-none shadow-none">Add Meal</button>
                        </div>
                        <p className="text-xs mt-2 opacity-70">Tip: You can type naturally, the API handles the math!</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <table className="table table-zebra w-full">
                        <thead className="bg-stone-100">
                            <tr>
                                <th>Meal</th>
                                <th>Calories</th>
                                <th>Protein</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals.map((meal) => (
                                <tr key={meal.id}>
                                    <td className="font-medium text-stone-800">{meal.name}</td>
                                    <td>{meal.calories} kcal</td>
                                    <td>{meal.protein}</td>
                                    <td><button className="btn btn-ghost btn-xs text-error">Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Diet;