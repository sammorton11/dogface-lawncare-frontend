import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <nav className="bg-green-700 text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dogface Lawn Solutions</h1>
            <ul className="flex space-x-4">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><Link to="/work">Our Work</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      </nav>
   );
}

