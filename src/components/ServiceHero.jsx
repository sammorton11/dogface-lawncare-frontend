// ServiceHero.jsx
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-1.jpg";

export default function ServiceHero() {
    return (
        <section
            className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 text-white container mx-auto px-6 py-24 flex flex-col items-center text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
                    We aim to deliver quality, reliability, and professionalism in every service we provide. We treat every
                    yard as if it were our own, ensuring attention to detail and personalized care that makes your outdoor
                    space thrive.
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
