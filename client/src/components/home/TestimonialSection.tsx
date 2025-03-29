import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import useMobile from "@/hooks/use-mobile";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Aisha Khan",
      role: "Grade 10 Student",
      rating: 5,
      content: "Rankerslab helped me improve my math scores dramatically. The personalized approach and engaging tutors made learning fun and effective."
    },
    {
      name: "Rajiv Patel",
      role: "Grade 12 Student",
      rating: 4.5,
      content: "The quality of education at Rankerslab is exceptional. The tutors are knowledgeable and patient, and the course materials are comprehensive."
    },
    {
      name: "Sarah Johnson",
      role: "Parent",
      rating: 5,
      content: "As a parent, I'm impressed with how Rankerslab has boosted my child's confidence in academics. The progress reports and regular updates keep me informed."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = isMobile ? 100 : 100 / (isMobile ? 1 : 3);
      carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl text-foreground mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the students who have experienced the Rankerslab difference.
          </p>
        </motion.div>
        
        <div className="relative">
          <div 
            className="overflow-hidden w-full"
            style={{ touchAction: "pan-y" }}
          >
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/3 px-4"
                  style={{ flexBasis: isMobile ? "100%" : "33.333%" }}
                >
                  <div className="bg-gray-50 rounded-xl p-6 shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full mr-4 flex items-center justify-center text-primary">
                        <User className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-yellow-400 mb-3 flex">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <Star className="h-4 w-4 fill-current opacity-50" />
                      )}
                    </div>
                    <p className="text-gray-700 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 hidden md:flex"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 hidden md:flex"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
