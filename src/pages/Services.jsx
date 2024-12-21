import aboutImage from "../assets/hero-5.jpg"; // Add a placeholder image of your choice
import missionImg from "../assets/hero-2.jpg"; // Add a placeholder image of your choice
import irrigationImg from "../assets/Irrigation.pdf"; // Add a placeholder image of your choice
import { Link } from "react-router-dom";
import ServiceHero from "../components/ServiceHero";

export default function Services() {
   const services = [
      "Lawn Mowing & Edging",
      "Seasonal Cleanups",
      "Fertilization & Weed Control",
      "Landscaping Design & Installation",
      "Shrub & Tree Trimming",
   ];

   return (
      <>
         <section className=" bg-gray-100 text-gray-800">

            {/* Put a Service Hero Image here */}
            <ServiceHero />

            <div className="container mx-auto flex flex-col space-y-32 justify-center items-center pt-32">
               {/* What We Do */}
               <div className="flex flex-col lg:flex-row w-full justify-center items-center space-x-44">
                  <div className="space-y-4">
                     <h2 id="whatwedo" className="text-3xl font-bold text-lime-700 text-center">What We Do</h2>
                     <p className="text-center max-w-3xl mx-auto">
                        At Dogface Lawn Solutions, we offer a wide range of services designed to enhance and maintain your
                        outdoor spaces.
                     </p>
                     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Lawn Mowing & Edging
                        </li>
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Seasonal Clean-Ups
                        </li>
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Fertilization & Weed Control
                        </li>
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Landscaping Design & Installation
                        </li>
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Shrub & Tree Trimming
                        </li>
                        <li className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300">
                           Power Washing
                        </li>
                     </ul>
                     <a
                        href={irrigationImg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 "
                     >
                        <div
                           className="max-w-[130px] bg-lime-200 text-slate-900 font-medium px-6 py-3 rounded-full shadow-md transition duration-300 mt-5"
                        >
                           View More
                        </div>
                     </a>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                     <img src={aboutImage} alt="About Us" className="rounded-sm shadow-lg" />
                  </div>
               </div>

               <div className="flex flex-row w-full justify-center items-center space-x-16">
                  <div className="w-full md:w-1/2 flex justify-center">
                     <img src={missionImg} alt="About Us" className="rounded-sm shadow-lg" />
                  </div>
                  {/* Our Mission */}
                  <div className="p-6 rounded-sm shadow-md my-24 w-1/2">
                     <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
                     <p className="leading-relaxed text-center">
                        We aim to deliver quality, reliability, and professionalism in every service we provide. We treat every
                        yard as if it were our own, ensuring attention to detail and personalized care that makes your outdoor
                        space thrive.
                     </p>
                  </div>
               </div>

               {/* Why Choose Us */}
               <div className="flex flex-col items-center justify-center pb-24">
                  <h2 className="text-3xl font-bold text-lime-700 text-center mb-6">Why Choose Us?</h2>
                  <section className="w-1/2 items-center justify-center text-center">
                     Join the many satisfied homeowners and businesses who trust Veteran & Family Lawn Care for all their lawn and landscaping needs. We’re excited to bring your vision to life and keep your yard looking its best year-round!

                     <br />
                     <br />
                     Contact us today to schedule your service or get a free quote. We look forward to working with you!
                  </section>

                  <br />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="p-4 bg-white rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">Veteran-Owned Values</h3>
                        <p>Integrity, discipline, and commitment are at the core of our work ethic.</p>
                     </div>
                     <div className="p-4 bg-white rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">Family-Operated Care</h3>
                        <p>We treat our clients like family, ensuring every project reflects our pride and dedication.</p>
                     </div>
                     <div className="p-4 bg-white rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
                        <p>With a blend of business acumen and hands-on expertise, we deliver results you can trust.</p>
                     </div>
                  </div>
                  <Link
                     to="/contact"
                     className="bg-lime-200 text-black font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 mt-10"
                  >
                     Contact Us
                  </Link>

               </div>
            </div>
         </section>
      </>
   );
}

