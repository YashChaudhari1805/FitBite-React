import React from 'react';
import HeroImage from '../assets/hero.jpg';

function Hero() {
    return (
        <div className="font-['Candara'] px-6 py-4 w-full">
            <div className="hero min-h-[500px] bg-blue-200 shadow-md rounded-2xl w-full">
                <div className="hero-content flex-col lg:flex-row gap-10 px-10 py-10 w-full">
                    {/* Text side */}
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold leading-tight">
                            Your One Stop Solution For Every Fitness Need!
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Track your diet, follow expert workouts, and embrace a healthier lifestyle — all in one place.
                        </p>
                        <button className="btn btn-neutral btn-outline mt-8 rounded-full px-8">
                            Get Started
                        </button>
                    </div>

                    {/* Image side */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={HeroImage}
                            alt="Fitness hero"
                            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
