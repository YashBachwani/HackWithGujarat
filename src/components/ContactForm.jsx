import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sendContactMessage } from '../pages/n8nservice';  // ✅ Corrected import

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await sendContactMessage(formData);
      setStatus('Message sent successfully!');
      console.log('n8n response:', response);
      setFormData({ name: '', email: '', message: '' });  // Clear form after sending
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <form className="flex flex-col items-center text-sm" onSubmit={handleSubmit}>
        <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
        <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label htmlFor="name" className="text-black/70">Your Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 p-2 mt-2 w-full border border-black-500/30 rounded outline-none focus:border-indigo-300"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-black/70">Your Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 p-2 mt-2 w-full border border-black-500/30 rounded outline-none focus:border-indigo-300"
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label htmlFor="message" className="text-black/70">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 h-40 border border-black-500/30 rounded resize-none outline-none focus:border-indigo-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
        >
          Send Message
        </button>
        {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;