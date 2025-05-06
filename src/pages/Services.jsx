import { Link } from "react-router-dom";
import ServiceHero from "../components/ServiceHero";
import irrigation from "../assets/Irrigation.pdf";

export default function Services() {
    return (
        <div className="bg-gray-100 text-gray-800">
            <ServiceHero />

            <div className="container mx-auto px-4 py-16">
                {/* What We Do Section */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 id="whatwedo" className="text-3xl font-bold text-lime-700 mb-4">
                            What We Do
                        </h2>
                        <p className="max-w-3xl mx-auto mb-8">
                            At Dogface Lawn Solutions, we offer a wide range of services designed to enhance and maintain your
                            outdoor spaces.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {[
                            "Lawn Mowing & Edging",
                            "Seasonal Clean-Ups",
                            "Landscaping Design & Installation",
                            "Shrub & Tree Trimming",
                            "Power Washing"
                        ].map((service, index) => (
                            <li key={index} className="text-center p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                                {service}
                            </li>
                        ))}
                    </ul>

                    <div className="text-center">
                        <a
                            href={irrigation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-lime-200 text-slate-900 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
                        >
                            View More
                        </a>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold text-lime-700 text-center mb-8">
                        Why Choose Us?
                    </h2>

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="mb-6">
                            Join the many satisfied homeowners and businesses who trust Veteran & Family Lawn Care for all their lawn and landscaping needs. We're excited to bring your vision to life and keep your yard looking its best year-round!
                        </p>
                        <p>
                            Contact us today to schedule your service or get a free quote. We look forward to working with you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-white rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">Veteran-Owned Values</h3>
                            <p>Integrity, discipline, and commitment are at the core of our work ethic.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">Family-Operated Care</h3>
                            <p>We treat our clients like family, ensuring every project reflects our pride and dedication.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-3">Experienced Professionals</h3>
                            <p>With a blend of business acumen and hands-on expertise, we deliver results you can trust.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-lime-200 text-black font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
