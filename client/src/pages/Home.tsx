import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import GoalSection from "@/components/home/GoalSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TeachingMethodology from "@/components/home/TeachingMethodology";
import LocationsMap from "@/components/home/LocationsMap";
import MetricsSection from "@/components/home/MetricsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SignUpModal from "@/components/shared/SignUpModal";

export default function Home() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOpenSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleCloseSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSignUpSuccess = () => {
    setIsSignUpModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenSignUpModal={handleOpenSignUpModal} />
      <main className="flex-grow">
        <HeroSection onOpenSignUpModal={handleOpenSignUpModal} />
        <GoalSection />
        <FeaturesSection />
        <TeachingMethodology />
        <LocationsMap />
        <MetricsSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection onOpenSignUpModal={handleOpenSignUpModal} />
      </main>
      <Footer />
      
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={handleCloseSignUpModal} 
        onSuccess={handleSignUpSuccess}
        isSuccessOpen={isSuccessModalOpen}
        onSuccessClose={handleCloseSuccessModal}
      />
    </div>
  );
}
