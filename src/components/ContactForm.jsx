import AppointmentScheduler from "./AppointmentScheduler";

export default function ContactForm() {
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4 w-full">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Message" className="w-full h-52 p-2 border rounded"></textarea>
                <button type="submit" className="bg-lime-900 text-white p-2 rounded px-8">Send</button>
            </form>
            <AppointmentScheduler />
        </div>
    );
}

