import React from "react";

function Header() {
    return (
        <>
            <header className="w-full bg-blue-200 text-black py-1 shadow-md">
                <div>
                    <h1 className="text-center tracking-wide text-2">Embrace Serene Life</h1>
                </div>
            </header>
            <div className="sticky navbar bg-base-100 shadow-md rounded-box font-['Candara'] m-2">
                <div className="navbar-start items-center">
                    <img src="/vite.svg" alt="FitBite Logo" className="w-8 h-8" />
                    <span className="text-2xl font-bold cursor-pointer tracking-wide">FitBite</span>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 text-base font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Workout</a></li>
                        <li><a>Diet</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2 mx-2">
                    <button className="btn btn-outline btn-primary bg">Login</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Header