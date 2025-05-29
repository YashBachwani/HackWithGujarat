import React, { useEffect } from 'react';
import './Home.css';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import ContactForm from '../components/ContactForm';
import Slider from '../components/Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallToAction from '../components/CallToAction';
import TagScroller from '../components/TagScroller';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
    });
    AOS.refresh();
  }, []);

  return (
    <>
    
        <MainHero />
      <HeroSection />
      <br /><br /><br />
      <TagScroller/>
      <br /><br /><br />
      <Testimonials />
      <br /><br /><br />
      {/* <Slider /> */}
      <Newsletter />
      <br /><br /><br />
      <ContactForm />
      <br /><br /><br />
      <Footer />
    </>
  );
};

export default Home;
