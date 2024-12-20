import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
   const services = [
      { title: "Lawn Mowing & Edging", description: "Regular mowing, edging, and trimming." },
      { title: "Seasonal Cleanups", description: "Leaf cleanup, winter prep, and more." },
      { title: "Weed Control & Fertilization", description: "Keep your lawn green and healthy." },
   ];

   return (
      <div>
         <Navbar />
         <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
               ))}
            </div>
         </div>
         <Footer />
      </div>
   );
}

