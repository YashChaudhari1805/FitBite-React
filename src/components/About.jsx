import React from "react";
import Logo from "../assets/logo.jpeg";

function About() {
    return (
        <div className="min-h-screen py-16 px-6 font-['Candara']">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div className="avatar mb-6">
                        <div className="w-24 rounded-full ring ring-stone-200 ring-offset-base-100 ring-offset-2">
                            <img src={Logo} alt="FitBite Logo" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-black text-stone-900 mb-4 tracking-tight">
                        About <span className="text-blue-200 border-stone-200">FitBite</span>
                    </h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        We believe that fitness shouldn't be complicated. Our mission is to
                        bridge the gap between intense workouts and delicious, healthy nutrition.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="card bg-white shadow-sm border border-stone-100 p-8">
                        <div className="text-primary text-3xl mb-4">🥗</div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Smart Nutrition</h3>
                        <p className="text-stone-600 text-sm">
                            Track your meals with ease and discover recipes that actually taste good.
                        </p>
                    </div>
                    <div className="card bg-white shadow-sm border border-stone-100 p-8">
                        <div className="text-primary text-3xl mb-4">💪</div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Effective Training</h3>
                        <p className="text-stone-600 text-sm">
                            Customizable workout logs designed to keep you moving toward your goals.
                        </p>
                    </div>
                    <div className="card bg-white shadow-sm border border-stone-100 p-8">
                        <div className="text-primary text-3xl mb-4">📈</div>
                        <h3 className="text-xl font-bold text-stone-800 mb-2">Data Driven</h3>
                        <p className="text-stone-600 text-sm">
                            Visual progress tracking so you can see exactly how far you've come.
                        </p>
                    </div>
                </div>

                <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Why FitBite?</h2>
                        <p className="text-stone-400 mb-4 leading-relaxed">
                            Most apps focus on just one thing—either the gym or the kitchen. FitBite
                            brings them together. We built this for the person who wants to lift heavy
                            but also wants to know exactly what's in their post-workout meal.
                        </p>
                        <p className="text-stone-400 leading-relaxed">
                            No fluff, no unnecessary ads, just the tools you need to stay fit.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="stats stats-vertical shadow bg-stone-800 text-stone-100">
                            <div className="stat">
                                <div className="stat-title text-stone-400">Active Users</div>
                                <div className="stat-value text-primary text-3xl">10k+</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-stone-400">Recipes</div>
                                <div className="stat-value text-3xl">500+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;