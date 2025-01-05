import { Link } from "react-router-dom";
import aboutImage from "../assets/image0.png"; // Add a placeholder image of your choice
import AboutHero from "../components/AboutHero";

export default function About() {
    return (
        <section className=" bg-gray-100 text-gray-800">
            {/* About us */}
            <AboutHero />
            <div className="pt-32"></div>
            <div className="container mx-auto flex flex-col space-y-32 justify-center items-center">
                {/* Who We Are */}
                <div className="flex flex-col md:flex-row gap-8 items-center pb-32 px-2">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-lime-700">Who We Are</h2>
                        <p className="leading-relaxed">
                            We’re proud to be a veteran-owned and family-operated business. Mike, a seasoned professional with a
                            strong background in medical sales, brings his organizational expertise and client-centered approach
                            to our operations. Hayden, with years of hands-on experience in landscaping and lawn care, ensures
                            every project is completed to the highest standard.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            Together, we combine leadership, craftsmanship, and a passion for community to deliver exceptional results.
                            Hayden also brings <strong>7 years of military background</strong> to the company, ensuring a disciplined
                            and professional approach to all projects.
                        </p>
                        <div className="pt-10">
                            <Link
                                to="/services/#whatwedo"
                                className="bg-lime-200 hover:bg-lime-900 text-black hover:text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300 mt-10"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

