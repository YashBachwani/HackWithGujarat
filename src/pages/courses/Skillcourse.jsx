import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const skillCourses = [
  {
    title: 'Graphic Design Fundamentals',
    price: '₹1,000',
    originalPrice: '₹1,500',
    discount: '33%',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=800&q=60',
  },
  {
    title: 'Digital Marketing Starter Kit',
    price: '₹1,299',
    originalPrice: '₹1,900',
    discount: '32%',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=60',
  },
  {
    title: 'Basic Video Editing Course',
    price: '₹899',
    originalPrice: '₹1,200',
    discount: '25%',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?fit=crop&w=800&q=60',
  },
];

const SkillBasedCourses = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-center">Skill-Based Courses</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {skillCourses.map((course, index) => (
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

export default SkillBasedCourses;
