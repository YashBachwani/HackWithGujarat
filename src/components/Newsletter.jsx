import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('⚠ Please enter a valid email!');
      return;
    }

    try {
      const response = await fetch('https://jeetpitale.app.n8n.cloud/webhook/01933c3c-d021-4937-9ad0-41103284235a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('✅ Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Network error. Please check your connection.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2">
      <div data-aos="fade-up" data-aos-duration="3000">
        <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <p className="md:text-lg text-gray-500/70 pb-8">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
        >
          <input
            className="border border-black-500 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-black-500"
            type="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full border border-black-500 text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      {status && (
        <div className={`mt-3 text-sm font-medium ${
          status.startsWith('✅') ? 'text-green-600' : 'text-red-600'
        }`}>
          {status}
        </div>
      )}
    </div>
  );
};

export default Newsletter;