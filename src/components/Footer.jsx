import logo from "../assets/card.svg"; // Replace with the correct path to card.svg

export default function Footer() {
   return (
      <footer className="bg-white text-black py-10">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {/* Logo and About */}
            <div className="flex flex-col items-start md:items-start space-y-4">
               <img src={logo} alt="Dogface Lawn Solutions Logo" className="h-38 w-screen lg:w-full" />
               <p className="text-left">
                  At Dogface Lawn Solutions, we pride ourselves on delivering exceptional lawn care services with
                  professionalism, dedication, and a personal touch.
               </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-4">
               <a href="/contact">
                  <h3 className="text-xl font-bold hover:text-lime-200">Contact Us</h3>
               </a>
               <p>
                  <strong>Mike White:</strong> <a href="tel:4056966900" className="hover:underline">(405)-696-6900</a>
               </p>
               <p>
                  <strong>Hayden Fitzgerald:</strong> <a href="tel:9189131499" className="hover:underline">(918)-913-1499</a>
               </p>
               <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:dogfacelawnllc@outlook.com" className="hover:underline">
                     dogfacelawnllc@outlook.com
                  </a>
               </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-4 items-center md:items-start">
               <h3 className="text-xl font-bold">Follow Us</h3>
               <div className="flex space-x-4">
                  <a
                     href="https://www.facebook.com/profile.php?id=61557682621741"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-lime-200 transition duration-200"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path d="M22.675 0h-21.35C.562 0 0 .562 0 1.254v21.492c0 .692.562 1.254 1.254 1.254h11.495v-9.294H9.847v-3.622h2.902V8.413c0-2.879 1.753-4.45 4.313-4.45 1.225 0 2.277.091 2.584.132v2.997h-1.772c-1.389 0-1.656.662-1.656 1.63v2.137h3.312l-.432 3.622h-2.88V24h5.641c.692 0 1.254-.562 1.254-1.254V1.254c0-.692-.562-1.254-1.254-1.254z" />
                     </svg>
                     <span className="sr-only">Facebook</span>
                  </a>
                  <a
                     href="#"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-lime-200 transition duration-200"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387-.113-.975-.213-2.477.045-3.538.23-.994 1.486-6.313 1.486-6.313s-.379-.758-.379-1.878c0-1.759 1.021-3.07 2.292-3.07 1.082 0 1.605.813 1.605 1.788 0 1.09-.693 2.719-1.048 4.233-.299 1.269.632 2.305 1.877 2.305 2.253 0 3.988-2.375 3.988-5.787 0-3.026-2.177-5.136-5.289-5.136-3.608 0-5.729 2.707-5.729 5.497 0 1.092.419 2.265.944 2.9.106.129.122.243.092.375-.101.426-.33 1.352-.376 1.54-.059.241-.196.292-.453.176-1.691-.761-2.744-3.146-2.744-5.067 0-4.136 3.009-7.942 8.678-7.942 4.557 0 8.097 3.249 8.097 7.588 0 4.5-2.834 8.125-6.777 8.125-1.325 0-2.565-.69-2.99-1.475l-.813 3.099c-.293 1.122-1.086 2.525-1.61 3.377C10.27 23.673 11.127 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0z" />
                     </svg>
                     <span className="sr-only">Instagram</span>
                  </a>
               </div>
            </div>
         </div>

         {/* Footer Bottom */}
         <div className="border-t border-green-600 mt-8 pt-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dogface Lawn Solutions LLC. All rights reserved.</p>
         </div>
      </footer>
   );
}

