import React, { useState } from 'react';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import WelcomeSection from './components/WelcomeSection';
import LeadershipSection from './components/LeadershipSection';
import RisingStarSection from './components/RisingStarSection';
import StatsBentoSection from './components/StatsBentoSection';
import FacilitiesSection from './components/FacilitiesSection';
import CreativeFocusSection from './components/CreativeFocusSection';
import StudentGallerySection from './components/StudentGallerySection';
import MottoPlaqueSection from './components/MottoPlaqueSection';
import LocationMapSection from './components/LocationMapSection';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';

export default function App() {
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Magical Vibrant Page Loader */}
      <PageLoader />

      {/* Main Navbar */}
      <Navbar onOpenWaModal={() => setIsWaModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero Slider with School Motto & Address */}
        <HeroSlider />

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Leadership & Vision (Director, Manager, Principal) */}
        <LeadershipSection />

        {/* Rising Star Spotlight: Tribhuwan Singh Rautela */}
        <RisingStarSection />

        {/* Bento Statistics & Academic Toppers Wall of Fame */}
        <StatsBentoSection />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Creative Focus: Beyond Classroom (Sports, Art, Dance, Craft) */}
        <CreativeFocusSection />

        {/* Student Gallery Section */}
        <StudentGallerySection />

        {/* Guiding Principle Heritage Motto Plaque */}
        <MottoPlaqueSection />

        {/* Interactive Location Map */}
        <LocationMapSection />
      </main>

      {/* Footer */}
      <Footer onOpenWaModal={() => setIsWaModalOpen(true)} />

      {/* WhatsApp Modal Dialog */}
      <WhatsAppModal
        isOpen={isWaModalOpen}
        onClose={() => setIsWaModalOpen(false)}
      />
    </div>
  );
}
