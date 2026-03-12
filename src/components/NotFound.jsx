import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 font-['Candara']">
            <div className="text-center">
                <div className="avatar mb-8">
                    <div className="w-32 rounded-full grayscale opacity-70">
                        <img src={Logo} alt="FitBite Logo" />
                    </div>
                </div>

                <h1 className="text-9xl font-black text-stone-200">404</h1>

                <div className="relative -mt-16">
                    <h2 className="text-3xl font-bold text-stone-800 mb-4">
                        Look like you've wandered off the track!
                    </h2>
                    <p className="text-stone-500 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist. It's like a rest day that
                        never ends—we need to get you back to the main routine.
                    </p>

                    <Link to="/" className="btn bg-stone-500 px-8 shadow-lg">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;