import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function TeachingMethodology() {
  const methodologies = [
    "Concept-based learning that focuses on understanding rather than memorization",
    "Regular assessments to track progress and identify areas for improvement",
    "Interactive problem-solving sessions to develop critical thinking skills",
    "Personalized feedback from experienced educators to guide improvement"
  ];

  return (
    <section id="methodology" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:pr-12">
              <h2 className="font-bold text-3xl text-foreground mb-6">Our Teaching Methodology</h2>
              <p className="text-gray-700 mb-4">
                At Rankerslab, we believe in a multi-dimensional approach to education that combines traditional teaching methods with innovative techniques.
              </p>
              <ul className="space-y-3">
                {methodologies.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Interactive learning" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
