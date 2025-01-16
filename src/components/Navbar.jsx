import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-10 w-full bg-white z-50 px-10">
            <div className="relative w-full px-4 mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="Dogface Logo" className="h-20 md:h-28" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <section
                        className={`${isOpen
                            ? "absolute top-full left-0 right-0 bg-white shadow-md z-50 rounded-lg mt-2"
                            : "hidden"
                            } md:relative md:flex md:shadow-none md:items-center md:space-x-8 text-sm md:text-base`}
                    >
                        {/* Contact Info */}
                        <div className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-12 md:text-left md:pr-32 text-[12px] lg:text-sm w-full">
                            <div className="flex items-center justify-start">
                                <span className="font-semibold mr-2">Mike White:</span>
                                <Link to="tel:(405)-696-6900" className="hover:text-green-600">
                                    (405)-696-6900
                                </Link>
                            </div>
                            <div className="flex items-center justify-start mt-2 md:mt-0">
                                <span className="font-semibold mr-2">Hayden Fitzgerald:</span>
                                <Link to="tel:(918)-913-1499" className="hover:text-green-600">
                                    (918)-913-1499
                                </Link>
                            </div>
                        </div>

                        {/* Menu Links */}
                        <ul className="flex flex-col p-4 md:p-0 md:flex-row space-y-2 md:space-y-0 md:space-x-12 text-center border-t md:border-0">
                            <li>
                                <Link to="/" className="block py-2 hover:text-green-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 hover:text-green-600">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="block py-2 hover:text-green-600">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 hover:text-green-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </nav>
    );
}
