import React from "react";

function Footer() {
    return (
        <>
            <div className="p-4 font-['Candara']">
                <footer className="footer sm:footer-horizontal text-base-content p-10 bg-blue-200 rounded-box mx-2">
                    <aside>
                        <img className='w-30 h-30' src='./vite.svg' />
                        <p>
                            FitBite
                            <br />
                            Empowering Healthy Lifestyle since 2026
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Recipes</a>
                        <a className="link link-hover">Workouts</a>
                        <a className="link link-hover">Diet Tracking</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </>
    )
}

export default Footer