import heroImage from "../assets/hero-1.jpg";

export default function ServiceHero() {
   return (
      <section
         className="relative md:w-screen  py-12 lg:py-36 bg-cover bg-center flex items-center"
         style={{ backgroundImage: `url(${heroImage})` }}
      >
         {/* Overlay for better text visibility */}
         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

         {/* Content Container */}
         <div className="relative z-10 text-white container mx-auto px-6 flex flex-col items-center justify-center h-full md:w-3/4 lg:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
               Our Services
            </h2>
         </div>
      </section>
   );
}


