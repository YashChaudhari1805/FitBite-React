import React from 'react';
import HeroImage from '../assets/hero.jpg';

function Hero() {
    return (
        <>
            <div className="p-4 font-['Candara'] mx-4">
                <div className="hero h-150 bg-blue-200 shadow-md rounded-box">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={HeroImage}
                            className="w-150 h-100 rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-6xl font-bold">Your One Stop Solution For Every Fitness Needs! </h1>
                            <button className="btn btn-neutral btn-outline mt-10 rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
