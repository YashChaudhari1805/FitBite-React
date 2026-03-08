import React from "react";
import Logo from '../assets/logo.jpeg';

function Header() {
    return (
        <div className="font-['Candara'] w-full">
            <header className="w-full bg-blue-200 text-black py-1.5 shadow-lg">
                <h1 className="text-center tracking-wide text-sm font-medium">Embrace Serene Life!</h1>
            </header>

            <div className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
                <div className="navbar px-6 py-2">
                    <div className="navbar-start items-center gap-2">
                        <img src={Logo} alt="FitBite Logo" className="w-9 h-9 rounded-md shadow-md" />
                        <span className="text-2xl font-bold cursor-pointer tracking-wide">FitBite</span>
                    </div>
                    <div className="navbar-center">
                        <ul className="menu menu-horizontal gap-1 text-base font-semibold">
                            <li><a className="rounded-lg px-4 py-2 hover:bg-blue-100">Home</a></li>
                            <li><a className="rounded-lg px-4 py-2 hover:bg-blue-100">Workout</a></li>
                            <li><a className="rounded-lg px-4 py-2 hover:bg-blue-100">Diet</a></li>
                            <li><a className="rounded-lg px-4 py-2 hover:bg-blue-100">Blog</a></li>
                            <li><a className="rounded-lg px-4 py-2 hover:bg-blue-100">About</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <button className="btn btn-neutral btn-dash">Log In</button>
                        <button className="btn btn-neutral btn-outline">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header