import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
   return (
      <div>
         <Navbar />
         <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <ContactForm />
         </div>
         <Footer />
      </div>
   );
}

