import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenSignUpModal: () => void;
}

export default function CTASection({ onOpenSignUpModal }: CTASectionProps) {
  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl mb-4">Ready to Begin Your Learning Journey?</h2>
          <p className="mb-8 text-white/90">
            Join thousands of students who are achieving academic excellence with Rankerslab.
          </p>
          <Button 
            onClick={onOpenSignUpModal}
            className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            size="lg"
          >
            Sign Up Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
