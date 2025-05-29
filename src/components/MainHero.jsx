import React, { useEffect } from 'react';
import '../pages/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const MainHero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration (ms)
          once: true,     // whether animation should happen only once
        });
        AOS.refresh();
      }, []);
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 mt-8 pt-15 md:mt-24">
        <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="max-w-lg max-md:mt-7">
          <h1 className="font-bold text-5xl md:text-6xl text-black">
            Educater's... <br />
            <span className="text-blue-500 text-5xl"> Learn, Teach, Thrive</span>
          </h1>
          <p className="mt-8 text-gray-700 text-sm sm:text-base">
            A dynamic platform that empowers students to excel and teachers to inspire.
            Join a learning revolution where education meets innovation.

          </p>
          <div className="flex items-center mt-6">
            <button className="relative">
              <span className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-md transition">
                Start Now
              </span>
              <svg
                className="absolute -left-5 -bottom-10"
                width="61"
                height="26"
                viewBox="0 0 61 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path truncated for readability. Paste full SVG from your original */}
              </svg>
            </button>
            <button className="flex items-center gap-1.5 px-6 py-2.5">
              Learn more
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div></div>
        <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          className="w-52 md:w-80 scale-x-[-1] max-md:mt-10"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg"
          alt="thinking"
        /></div>
      </main>
        <div data-aos="fade-up"
     data-aos-duration="3000">

 <div className="mt-10 md:mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-xs md:text-sm pb-12">
      {/* Feature 1 */}
      <div className="flex flex-col md:flex-row items-center text-center md:gap-2 px-4 py-3 md:px-6 border-b md:border-b-0 md:border-r border-gray-300 w-full md:w-auto">
        <span className="text-2xl md:text-3xl">🔓</span>
        <p className="mt-1 md:mt-0">Complete Access</p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col md:flex-row items-center text-center md:gap-2 px-4 py-3 md:px-6 border-b md:border-b-0 md:border-r border-gray-300 w-full md:w-auto">
        <span className="text-2xl md:text-3xl">💳</span>
        <p className="mt-1 md:mt-0">Secure Payment</p>
      </div>

      {/* Feature 3 - User Management with "god" icon */}
      <div className="flex flex-col md:flex-row items-center text-center md:gap-2 px-4 py-3 md:px-6 w-full md:w-auto">
        <span className="text-2xl md:text-3xl">🧙‍♂️</span>
        <p className="mt-1 md:mt-0">User Management</p>
      </div>
    </div>      </div>
    </>
  )
}

export default MainHero
