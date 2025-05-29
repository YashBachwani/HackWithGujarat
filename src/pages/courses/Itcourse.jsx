import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const lectures = [
  {
    title: 'HTML & CSS Basics',
    price: 299,
    originalPrice: 799,
    image: 'https://img.icons8.com/color/480/html-5.png',
  },
  {
    title: 'JavaScript Fundamentals',
    price: 349,
    originalPrice: 899,
    image: 'https://img.icons8.com/color/480/javascript--v1.png',
  },
  {
    title: 'React.js for Beginners',
    price: 499,
    originalPrice: 1099,
    image: 'https://img.icons8.com/color/480/react-native.png',
  },
  {
    title: 'Backend with Node.js & Express',
    price: 599,
    originalPrice: 1299,
    image: 'https://img.icons8.com/color/480/nodejs.png',
  },
  {
    title: 'MongoDB for Developers',
    price: 399,
    originalPrice: 999,
    image: 'https://img.icons8.com/color/480/mongodb.png',
  },
];

const Itcourse = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true,     // whether animation should happen only once
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <div data-aos="fade-up"
            data-aos-duration="3000">
    <div className="pt-20 min-h-screen bg-transparent py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        IT & Coding Course Details
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {lectures.map((lecture, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <img src={lecture.image} alt={lecture.title} className="w-full h-44 object-contain p-4 bg-gray-50" />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{lecture.title}</h2>

              <div className="mt-2 mb-4">
                <p className="text-indigo-600 text-xl font-bold">
                  ₹{lecture.price}
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ₹{lecture.originalPrice}
                  </span>
                </p>
                <p className="text-green-600 text-sm">
                  Save ₹{lecture.originalPrice - lecture.price}
                </p>
              </div>

              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Itcourse;
