import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationsMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  const locations = [
    { id: "dubai", name: "Dubai", position: { top: "30%", left: "60%" } },
    { id: "hyderabad", name: "Hyderabad", position: { top: "40%", left: "65%" } },
    { id: "mumbai", name: "Mumbai", position: { top: "42%", left: "62%" } },
    { id: "bengaluru", name: "Bengaluru", position: { top: "44%", left: "64%" } }
  ];

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl text-foreground mb-4">Our Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find Rankerslab in these major cities worldwide.</p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden bg-gray-200">
            <div className="absolute inset-0 bg-blue-100/50 flex justify-center items-center">
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1589519160732-57fc6aa70951?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-30"
                />
                
                {locations.map((location) => (
                  <div 
                    key={location.id}
                    className="absolute group cursor-pointer"
                    style={{ top: location.position.top, left: location.position.left }}
                    onMouseEnter={() => setActiveLocation(location.id)}
                    onMouseLeave={() => setActiveLocation(null)}
                  >
                    <div className="w-4 h-4 bg-primary rounded-full relative animate-pulse">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg transition-opacity duration-300 whitespace-nowrap ${activeLocation === location.id || activeLocation === null ? 'opacity-100' : 'opacity-0'}`}>
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {locations.map((location, index) => (
              <motion.div 
                key={location.id}
                className={`bg-gray-50 hover:bg-primary/10 rounded-lg p-3 text-center transition-colors cursor-pointer ${activeLocation === location.id ? 'bg-primary/10' : ''}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveLocation(location.id === activeLocation ? null : location.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <MapPin className="h-5 w-5 text-primary mx-auto mb-1" />
                <h3 className="font-medium">{location.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
