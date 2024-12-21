import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Your logo file
import { useState } from "react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav id="navbar" className="z-10 items-center text-slate-950 w-full bg-white bg-opacity-90 shadow-md backdrop-blur-sm">
         <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
               <img src={logo} alt="Dogface Logo" className="h-20 md:h-28" />
            </Link>

            {/* Mobile Menu Button */}
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="md:hidden focus:outline-none"
            >
               {/* Hamburger Icon */}
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
               className={`${isOpen ? "block" : "hidden"
                  } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base`}
            >
               {/* Contact Info */}
               <div className="flex flex-col md:flex-row md:space-x-12  md:text-left pr-32 text-[12px] lg:text-sm w-full">
                  <div className="flex items-center justify-center md:justify-start ">
                     <span className="font-semibold mr-2">Mike White:</span>
                     <Link to="tel:(405)-696-6900" 
                        className="hover:text-green-600"
                     >
                        (405)-696-6900
                     </Link>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                     <span className="font-semibold mr-2">Hayden Fitzgerald:</span>
                     <Link to="tel:(918)-913-1499" className="hover:text-green-600">
                        (918)-913-1499
                     </Link>
                  </div>
               </div>

               {/* Menu Links */}
               <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 text-center">
                  <li>
                     <Link to="/" className="hover:text-green-600">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link to="/about" className="hover:text-green-600">
                        About
                     </Link>
                  </li>
                  <li>
                     <Link to="/services" className="hover:text-green-600">
                        Services
                     </Link>
                  </li>
                  <li>
                     <Link to="/contact" className="hover:text-green-600">
                        Contact
                     </Link>
                  </li>
               </ul>
            </section>
         </div>
      </nav>
   );
}

