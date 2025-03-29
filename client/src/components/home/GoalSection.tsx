import { motion } from "framer-motion";

import f1 from "./Screenshot (310).png";
import f2 from "./Screenshot (311).png";
import f3 from "./Screenshot (312).png";
import f4 from "./Screenshot (313).png";

export default function GoalSection() {
  return (
    <section id="goal" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:pr-12">
              <h2 className="font-bold text-2xl md:text-3xl text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4 py-2">
                "Our goal is achieved when you succeed! We aim to empower students with personalized & all-inclusive learning while guiding them to remarkable success."
              </p>
            </div>
          </motion.div>
          
          {/* Image Grid */}
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[f1, f2, f3, f4].map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <img 
                  src={image} 
                  alt={`Goal image ${index + 1}`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
