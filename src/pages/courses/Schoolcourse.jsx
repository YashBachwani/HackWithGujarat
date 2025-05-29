import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const schoolSubjects = [
  {
    title: 'Mathematics Mastery (Class 9-10)',
    price: '₹1,200',
    originalPrice: '₹1,800',
    discount: '33%',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fit=crop&w=800&q=60',
  },
  {
    title: 'Science Simplified (Class 9-10)',
    price: '₹1,400',
    originalPrice: '₹2,000',
    discount: '30%',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?fit=crop&w=800&q=60',
  },
  {
    title: 'Social Studies Essentials',
    price: '₹999',
    originalPrice: '₹1,500',
    discount: '33%',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?fit=crop&w=800&q=60',
  },
];

const SchoolSubjects = () => {
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
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">School Subjects</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {schoolSubjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 border">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{subject.title}</h2>
            <p className="text-indigo-600 text-xl font-bold">{subject.price} <span className="line-through text-gray-500 text-sm ml-2">{subject.originalPrice}</span></p>
            <p className="text-green-600 text-sm">Save {subject.discount}</p>
            <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default SchoolSubjects;