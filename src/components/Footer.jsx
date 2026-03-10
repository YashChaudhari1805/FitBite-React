import React from "react";
import Logo from '../assets/logo.jpeg';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="font-['Candara'] px-6 py-4 w-full mt-auto">
            <footer className="footer sm:footer-horizontal text-base-content p-10 bg-blue-200 rounded-2xl w-full">
                <aside>
                    <Link to={'/'}>
                        <img className='w-24 h-24 rounded-xl shadow-lg' src={Logo} alt="FitBite Logo" />
                    </Link>

                    <p className="font-semibold">
                        FitBite
                        <br />
                        <span className="font-normal text-sm">Empowering Healthy Lifestyle since 2026</span><br />
                        <span className="font-normal text-sm">Made with ❤️ in Navi Mumbai</span><br />
                        <span className="font-normal text-sm">Yash Chaudhari</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to={'recipes'} className="link link-hover">Recipes</Link>
                    <Link to={'workouts'} className="link link-hover">Workouts</Link>
                    <Link to={'diet'} className="link link-hover">Diet Tracking</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'about'} className="link link-hover">About Us</Link>
                    <Link to={'contact'} className="link link-hover">Contact Us</Link>
                    <Link to={'jobs'} className="link link-hover">Jobs</Link>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
