import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-5">
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-sm mb-4">
                            Explore a wide range of cuisines and find your favorite restaurants with our curated selection of restaurants.&nbsp;
                            <Link to="/about" className="text-blue-400 hover:text-blue-500">
                                Read More...
                            </Link>
                        </p>
                        <ul className="inline-flex space-x-4">
                            <li>
                                <a href="#" title="Facebook" className="block bg-blue-600 hover:bg-blue-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" className="">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </li>
                           
                            <li>
                                <a href="https://www.linkedin.com/in/" title="Linkedin" target="_blank" className="block bg-blue-600 hover:bg-blue-700 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" className="">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-sm mb-3">
                            <a href="mailto:Vijay veersingh749@gmail.com">singhvijayveer472@gmail.com</a>
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 text-center">
                        <h3 className="text-xl font-bold mb-4">Important Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="text-white hover:text-gray-300">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-white hover:text-gray-300">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-gray-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-gray-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-around gap-8 border-t border-gray-700 pt-4 mt-4 text-center text-sm">
                    <div className="border-b border-gray-700 text-center text-sm">
                        &copy; {new Date().getFullYear()} Foody Monk. All rights reserved.
                    </div>
                    <div className="border-b border-gray-700 text-center text-sm">
                        Created with ❣️ by <a href="https://github.com/Vijay veersingh749" target="_blank" className="text-blue-400 hover:text-blue-500"> <span> Vijay veer singh</span></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
