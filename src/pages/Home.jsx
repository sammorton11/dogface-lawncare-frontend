import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
   return (
      <div>
         <Navbar />
         <main className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Dogface Lawn Solutions</h1>
            <p>Your trusted lawn care professionals in Oklahoma!</p>
         </main>
         <Footer />
      </div>
   );
}

