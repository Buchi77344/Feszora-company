// App.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
 
function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;