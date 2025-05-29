import React,{useEffect} from "react";
import '../pages/Home.css'
import ImageGallery from "./ImageGallery";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (ms)
        once: true,     // whether animation should happen only once
      });
      AOS.refresh();
    }, []);
  return (
    <>
    <div data-aos="fade-up"
     data-aos-duration="3000">
    <main className="mx-auto px-4 sm:px-8 lg:px-12 mt-8 pb-12">
      <section className="mt-8 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
        <img
          className="w-24 md:w-28"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg"
          alt="Thinking Illustration"
        />
        <div className="text-center md:text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black">
            About Us...
            <span className="block font-bold text-gray-900 mt-1 text-2xl relative">
              Educater's:- When knowledge is shared, everyone grows.
              <svg
                className="absolute -bottom-7 w-full h-4 md:h-5"
                width="370"
                height="26"
                viewBox="0 0 370 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m310.521 0 2.587.002A13492 13492 0 0 0 323.855 0h19.555a693 693 0 0 1 2.536 0 149 149 0 0 1 1.137 0c.908-.004 1.817.09 2.677.399..."
                  fill="currentColor"
                />
              </svg>
            </span>
          </h1>
          <p>At Educater’s, we believe that education is the most powerful tool to change the world — and everyone deserves access to it.

Founded with a vision to bridge the gap between passionate educators and eager learners, Educater’s is more than just a platform. It’s a thriving ecosystem where students grow smarter, and teachers grow stronger.</p>
        </div>
      </section>
    </main>
    </div>
    </>
  );
};

export default HeroSection;
