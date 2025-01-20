import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AppointmentScheduler from "./AppointmentScheduler";

export default function ContactForm() {
    const form = useRef(null);
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setStatus('Message sent successfully!');
                        form.current.reset();
                    },
                    (error) => {
                        console.log(error.text);
                        setStatus('Failed to send message. Please try again.');
                    }
                );
        }
    };

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full h-52 p-2 border rounded"
                    required
                ></textarea>
                {status && (
                    <div className={`p-2 rounded ${status.includes('successfully')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {status}
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-lime-900 text-white p-2 rounded px-8"
                >
                    Send
                </button>
            </form>
            <AppointmentScheduler />
        </div>
    );
}
