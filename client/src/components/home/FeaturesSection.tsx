import { motion } from "framer-motion";
import { GraduationCap, Video, BookOpen } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Personalized Learning",
      description: "Tailored learning paths designed to meet each student's unique needs and learning style.",
      color: "primary",
      delay: 0
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Live & Engaging",
      description: "Interactive live sessions that make learning fun and keep students actively engaged.",
      color: "cyan-500",
      delay: 0.2
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Elite Tutors",
      description: "Learn from experienced educators who are experts in their respective fields.",
      color: "orange-500",
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl text-foreground mb-4">Our Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Rankerslab the ideal platform for your educational journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-t-4 border-${feature.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              style={{ 
                borderTopColor: 
                  feature.color === "primary" ? "hsl(var(--primary))" : 
                  feature.color === "cyan-500" ? "#06b6d4" : 
                  "#f97316" 
              }}
            >
              <div className={`text-4xl mb-4 text-${feature.color}`} style={{ 
                color: 
                  feature.color === "primary" ? "hsl(var(--primary))" : 
                  feature.color === "cyan-500" ? "#06b6d4" : 
                  "#f97316" 
              }}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
