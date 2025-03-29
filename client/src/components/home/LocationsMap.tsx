import { motion } from "framer-motion";
import { MapPin, Building, Phone, Map } from "lucide-react";

export default function LocationsMap() {
  const locations = [
    { 
      id: "dubai", 
      name: "Dubai", 
      address: "Dubai Knowledge Park, Dubai, UAE",
      phone: "+971 50 123 4567"
    },
    { 
      id: "hyderabad", 
      name: "Hyderabad", 
      address: "Jubilee Hills, Hyderabad - 500033",
      phone: "+91 76543 21098"
    },
    { 
      id: "mumbai", 
      name: "Mumbai", 
      address: "Andheri East, Mumbai - 400069",
      phone: "+91 98765 43210"
    },
    { 
      id: "bengaluru", 
      name: "Bengaluru", 
      address: "Koramangala, Bengaluru - 560034",
      phone: "+91 87654 32109"
    }
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
          <h2 className="font-bold text-3xl text-foreground mb-4">Our Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Rankerslab's educational centers across India and Dubai. Our strategically located campuses offer state-of-the-art facilities and the same high-quality education standards.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div 
              key={location.id}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{location.name}</h3>
                <div className="w-12 h-1 bg-primary/30 rounded mb-4"></div>
                
                <div className="flex items-start mb-2">
                  <Building className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-center text-sm">{location.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <p className="text-primary font-medium text-center text-sm">{location.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 italic">
            * Virtual classes available globally, regardless of your location.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
