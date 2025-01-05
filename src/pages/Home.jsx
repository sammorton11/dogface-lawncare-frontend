import { Link } from "react-router-dom";
import heroImage from "../assets/hero-4.jpg"; // Replace with your actual hero image path
import ContactForm from "../components/ContactForm";

export default function Home() {
   return (
      <>
         <section
            className="absolute inset-0 h-screen md:h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${heroImage})` }}
         >
            {/* Overlay for Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 pt-0 md:pt-32">
               <h1 className="text-2xl md:text-6xl font-bold mb-4 leading-tight">
                  Dogface Lawn Solutions
               </h1>
               <p className="w-full text-xs md:text-lg mb-10 leading-relaxed">
                  Veteran & Family Lawn Care. Exceptional service, community values.
               </p>
               <Link
                  to="/about"
                  className="bg-lime-200 text-slate-900 font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
               >
                  Learn More
               </Link>
            </div>
         </section>
         <ContactForm />
      </>
   );
}

