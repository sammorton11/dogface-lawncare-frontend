export default function ContactForm() {
   return (
      <form className="space-y-4">
         <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
         <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
         <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
         <button type="submit" className="bg-green-700 text-white p-2 rounded">Send</button>
      </form>
   );
}

