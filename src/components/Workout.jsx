import React from "react";

function Workout() {
    const todayRoutine = [
        { name: "Bench Press", sets: "4", reps: "8-12", weight: "60kg" },
        { name: "Incline Dumbbell Press", sets: "3", reps: "10", weight: "20kg" },
        { name: "Chest Flys", sets: "3", reps: "15", weight: "12kg" },
        { name: "Pushups", sets: "3", reps: "Failure", weight: "Bodyweight" },
    ];

    return (
        <div className="min-h-screen py-10 px-6 font-['Candara']">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800">Today's Workout</h1>
                        <p className="text-stone-500">Push Day - Focus on Chest & Triceps</p>
                    </div>
                    <div className="badge badge-primary p-4 bg-blue-200 border-none text-black font-bold">Day 12 / 30</div>
                </header>

                {/* Exercise List */}
                <div className="space-y-4">
                    {todayRoutine.map((ex, index) => (
                        <div key={index} className="collapse collapse-arrow bg-white border border-stone-200 shadow-sm">
                            <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                            <div className="collapse-title text-xl font-medium flex justify-between items-center pr-12">
                                <span>{ex.name}</span>
                                <span className="text-sm text-stone-400 font-normal">{ex.sets} Sets × {ex.reps}</span>
                            </div>
                            <div className="collapse-content">
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        <thead>
                                            <tr>
                                                <th>Set</th>
                                                <th>Weight</th>
                                                <th>Reps</th>
                                                <th>Done</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: parseInt(ex.sets) }).map((_, i) => (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{ex.weight}</td>
                                                    <td>{ex.reps}</td>
                                                    <td><input type="checkbox" className="checkbox checkbox-success checkbox-sm" /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="btn btn-block btn-neutral mt-8 shadow-lg">Finish Workout</button>
            </div>
        </div>
    );
}

export default Workout;