import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Praveen</h3>
                        <p className="text-sm text-gray-600">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/home" className="hover:text-black">Home</a></li>
                            <li><a href="/blogs" className="hover:text-black">Blogs</a></li>
                            <li><a href="/projects" className="hover:text-black">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/about" className="hover:text-black">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="hover:text-black">Terms & Conditions</Link></li>
                            <li><Link to="/disclaimer" className="hover:text-black">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Praveen. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
