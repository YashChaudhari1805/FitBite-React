import React from 'react';

function Hero() {
    return (
        <>
            <div className="p-4 font-['Candara'] mx-4">
                <div className="hero min-h-screen bg-blue-200 shadow-md rounded-box">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="w-150 h-100 rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-6xl font-bold">Your One Stop Solution For Every Fitness Needs! </h1>
                            <button className="btn btn-primary mt-2">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
