import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenSignUpModal: () => void;
}

export default function HeroSection({ onOpenSignUpModal }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-16 bg-gradient-to-r from-primary/5 to-blue-100/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24">
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Unlock Your Child's Learning Potential
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Join Rankerslab for a personalized learning experience designed to empower students and help them achieve academic excellence. Empowering Students Across All Boards – CBSE, ICSE, IGCSE, SSC, IB, and NIOS! Specialized Coaching for NEET, IIT, and Olympiads to Help You Achieve Unmatched Success.
            </p>
            <Button 
              onClick={onOpenSignUpModal}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Child learning enthusiastically" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/80 to-transparent h-1/3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
