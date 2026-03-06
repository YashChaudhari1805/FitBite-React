import React from "react";
import Logo from '../assets/logo.jpeg';

function Footer() {
    return (
        <div className="font-['Candara'] px-6 py-4 w-full mt-auto">
            <footer className="footer sm:footer-horizontal text-base-content p-10 bg-blue-200 rounded-2xl w-full">
                <aside>
                    <img className='w-24 h-24 rounded-xl shadow-lg' src={Logo} alt="FitBite Logo" />
                    <p className="font-semibold">
                        FitBite
                        <br />
                        <span className="font-normal text-sm">Empowering Healthy Lifestyle since 2026</span>
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
    )
}

export default Footer
