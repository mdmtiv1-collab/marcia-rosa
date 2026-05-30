/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import DishesGallery from './components/DishesGallery';
import WhyChooseMe from './components/WhyChooseMe';
import InterstateCTA from './components/InterstateCTA';
import HowItWorks from './components/HowItWorks';
import BehindTheScenes from './components/BehindTheScenes';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-chef-sand text-chef-dark">
      {/* 
        MARCIA ROSA - PERSONAL CHEF LANDING PAGE (MOBILE FIRST)
        Designed with warm earthy tones, premium typography and maximum conversion to WhatsApp. 
      */}
      
      {/* 1. Sticky Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section - First Fold Accent */}
        <Hero />

        {/* 3. About Me - Authority Personal Description */}
        <AboutMe />

        {/* 4. Dishes and Results Grid (Visual Proof & Filtering) */}
        <DishesGallery />

        {/* 5. Values Section - Why Choose Marcia */}
        <WhyChooseMe />

        {/* 6. Intermediate CTA Banner */}
        <InterstateCTA />

        {/* 7. How to Order Progress Block */}
        <HowItWorks />

        {/* 8. Day to Day Behind the Scenes (Process Transparency) */}
        <BehindTheScenes />

        {/* 9. Social Proof Testimonials */}
        <Testimonials />

        {/* 10. Direct Closing Contact CTA */}
        <FinalCTA />
      </main>

      {/* 11. Grounded Foot Page Section */}
      <Footer />

      {/* 12. Floating Quick WhatsApp Action Button */}
      <FloatingWhatsapp />
    </div>
  );
}
