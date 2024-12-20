import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
   return (
      <div>
         <Navbar />
         <div className="p-8 space-y-4">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p>
               Veteran & Family Lawn Care, founded by Mike White and Hayden Fitzgerald, combines professional expertise with military precision.
            </p>
         </div>
         <Footer />
      </div>
   );
}

