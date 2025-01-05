// AboutHero.jsx
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-3.jpg";

export default function AboutHero() {
    return (
        <section
            className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 text-white container mx-auto px-6 py-24 flex flex-col items-center text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    About Us
                </h2>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Welcome to <span className="font-semibold">Veteran & Family Lawn Care</span>, where exceptional service and community
                    values are at the heart of everything we do.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-10">
                    Founded by <span className="font-semibold">Mike White</span> and{" "}
                    <span className="font-semibold">Hayden Fitzgerald</span>, we bring a unique blend of professionalism, hard work, and dedication to
                    creating and maintaining beautiful outdoor spaces for our clients.
                </p>
                <Link
                    to="/contact"
                  className="bg-lime-200 text-slate-900 font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}

