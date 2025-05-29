import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const competitiveCourses = [
  {
    title: 'UPSC Prelims Crash Course',
    price: '₹1,899',
    originalPrice: '₹2,500',
    discount: '24%',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?fit=crop&w=800&q=60',
  },
  {
    title: 'SSC CGL Preparation Series',
    price: '₹1,299',
    originalPrice: '₹1,800',
    discount: '28%',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fit=crop&w=800&q=60',
  },
  {
    title: 'Bank PO Mains Strategy',
    price: '₹1,150',
    originalPrice: '₹1,700',
    discount: '32%',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?fit=crop&w=800&q=60',
 },
];

const CompetitiveExams = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-center">Competitive Exams</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {competitiveCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 border">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-indigo-600 text-xl font-bold">{course.price} <span className="line-through text-gray-500 text-sm ml-2">{course.originalPrice}</span></p>
            <p className="text-green-600 text-sm">Save {course.discount}</p>
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

export default CompetitiveExams;