import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;