import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center p-8 h-screen">
            {/* Flex container for form and map */}
            <div className="flex flex-col md:flex-row w-full justify-between items-start gap-8 h-full">
                <ContactForm />
                <GoogleMap />
            </div>
        </div>
    );
}

