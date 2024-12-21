import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
   const { pathname, hash } = useLocation();

   useEffect(() => {
      if (hash) {
         // Scroll to the element with the given hash ID
         const element = document.getElementById("navbar");
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      } else {
         // Scroll to the top of the page
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
   }, [pathname, hash]);

   return null; // This component doesn't render anything
}

