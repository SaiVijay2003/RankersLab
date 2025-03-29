import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, Award, Calendar, Building, Map, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SignUpModal from "@/components/shared/SignUpModal";
import { useState } from "react";

export default function AboutUs() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const features = [
    {
      title: "Academic Excellence",
      description: "We provide high-quality education across all boards (CBSE, ICSE, IGCSE, SSC, IB, and NIOS) to help students achieve their full potential."
    },
    {
      title: "Specialized Coaching",
      description: "Expert guidance for competitive exams including NEET, IIT-JEE, and Olympiads with proven success rates."
    },
    {
      title: "Personalized Learning",
      description: "Tailored learning paths designed to meet each student's unique needs and learning style."
    },
    {
      title: "Interactive Sessions",
      description: "Engaging live classes that make learning fun and keep students actively involved in the learning process."
    },
    {
      title: "Expert Educators",
      description: "Learn from experienced tutors who are specialists in their respective fields and passionate about teaching."
    },
    {
      title: "Comprehensive Resources",
      description: "Access to extensive study materials, practice tests, and resources to support learning at every stage."
    },
    {
      title: "Technology-Enhanced Learning",
      description: "Cutting-edge digital tools and platforms to facilitate effective learning and progress tracking."
    },
    {
      title: "Continuous Assessment",
      description: "Regular evaluation and feedback to monitor student progress and identify areas for improvement."
    }
  ];
  
  const timeline = [
    {
      year: "2010",
      title: "Founding Year",
      description: "Rankerslab was founded with a vision to transform education through technology and personalized learning."
    },
    {
      year: "2013",
      title: "First Expansion",
      description: "Opened our second center in Mumbai, reaching more students across India."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched our first online learning platform, making quality education accessible to remote areas."
    },
    {
      year: "2018",
      title: "International Presence",
      description: "Expanded to Dubai, bringing our innovative teaching methodologies to international students."
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description: "Successfully transitioned all courses online during the global pandemic, ensuring educational continuity."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced AI-powered personalized learning paths and assessment tools."
    },
    {
      year: "Present",
      title: "Growing Impact",
      description: "Currently serving over 40,000 students across 4 major cities with plans for further expansion."
    }
  ];
  
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      description: "Former professor with 20+ years of experience in education technology and curriculum development."
    },
    {
      name: "Dr. Meera Patel",
      role: "Academic Director",
      description: "PhD in Education with expertise in developing innovative teaching methodologies."
    },
    {
      name: "Ravi Shankar",
      role: "Chief Technology Officer",
      description: "Tech visionary leading our digital platforms and AI-powered learning systems."
    },
    {
      name: "Priya Sharma",
      role: "Head of Student Success",
      description: "Dedicated to ensuring every student receives the support needed to excel."
    }
  ];

  const locations = [
    {
      city: "Mumbai",
      address: "Andheri East, Mumbai - 400069",
      phone: "+91 98765 43210"
    },
    {
      city: "Bengaluru",
      address: "Koramangala, Bengaluru - 560034",
      phone: "+91 87654 32109"
    },
    {
      city: "Hyderabad",
      address: "Jubilee Hills, Hyderabad - 500033",
      phone: "+91 76543 21098"
    },
    {
      city: "Dubai",
      address: "Dubai Knowledge Park, Dubai, UAE",
      phone: "+971 50 123 4567"
    }
  ];

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSignUpSuccess = () => {
    setIsSignUpModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenSignUpModal={() => setIsSignUpModalOpen(true)} />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bold text-4xl md:text-5xl text-foreground mb-4">About Rankerslab</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Discover what makes us the preferred choice for educational excellence across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg mb-4">
                  At Rankerslab, our mission is to make quality education accessible to all students, regardless of their geographical location or economic background. We believe in empowering students with the knowledge, skills, and confidence needed to excel academically and in life.
                </p>
                <p className="text-gray-600 text-lg">
                  Our goal is achieved when you succeed! We aim to empower students with personalized & all-inclusive learning while guiding them to remarkable success.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Key Features Grid */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="font-semibold text-xl text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Our Journey Timeline */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Journey</h2>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 mb-16">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] mt-2"></div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="bg-primary text-white text-lg font-semibold px-4 py-1 rounded-full md:mr-4 mb-2 md:mb-0 inline-block">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Leadership Team */}
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Contact Information */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover Rankerslab's educational centers across India and Dubai. Our strategically located campuses offer state-of-the-art facilities and the same high-quality education standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locations.map((location, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Map className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl text-foreground mb-3">{location.city}</h3>
                  <div className="w-12 h-1 bg-primary/30 rounded mb-4"></div>
                  <p className="text-gray-600 text-center mb-3">{location.address}</p>
                  <p className="text-primary font-medium text-center">{location.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            className="bg-primary text-white rounded-xl shadow-md p-8 text-center mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Rankerslab?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Take the first step towards academic excellence. Join thousands of successful students who have transformed their learning journey with us.
            </p>
            <Button 
              onClick={() => setIsSignUpModalOpen(true)}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-6 rounded-full text-lg"
            >
              Sign Up Today
            </Button>
          </motion.div>
        </div>
      </div>
      <Footer />
      
      <SignUpModal 
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        onSuccess={handleSignUpSuccess}
        isSuccessOpen={isSuccessModalOpen}
        onSuccessClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
}