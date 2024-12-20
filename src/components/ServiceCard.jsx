export default function ServiceCard({ title, description }) {
   return (
      <div className="p-4 bg-gray-100 rounded-md shadow-md">
         <h3 className="text-lg font-semibold mb-2">{title}</h3>
         <p>{description}</p>
      </div>
   );
}

