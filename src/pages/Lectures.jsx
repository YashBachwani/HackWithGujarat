import React from 'react'
import '../pages/Home.css'
import Footer from '../components/Footer';
import banner1 from '../assets/banner1.jpg'; // Use your uploaded image or any other
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'IT & Coding',
    link: '/courses/it-coding',
    price: '4,600',
    originalPrice: '5,200',
    discount: '12%',
    startDate: '6 Jun, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'Dropper JEE Aspirants',
    image: banner1,
  },
  {
    title: 'Entrance Exams',
    link:'/courses/entrance-exams',
    price: '4,700',
    originalPrice: '5,300',
    discount: '11%',
    startDate: '9 Jun, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'JEE Aspirants',
    image: banner1,
  },
  {
    title: 'School Subjects',
    link:'/courses/school-subjects',
    price: '4,799',
    originalPrice: '5,600',
    discount: '14%',
    startDate: '21 Apr, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'Dropper JEE Aspirants',
    image: banner1,
  },
  {
    title: 'Language Learning',
    link:'/courses/language-learning',
    price: '4,700',
    originalPrice: '5,300',
    discount: '11%',
    startDate: '9 Jun, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'JEE Aspirants',
    image: banner1,
  },
  {
    title: 'Competitive Exams',
    link:'/courses/competitive-exams',
    price: '4,799',
    originalPrice: '5,600',
    discount: '14%',
    startDate: '21 Apr, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'Dropper JEE Aspirants',
    image: banner1,
  },
  {
    title: 'Skill-Based Courses',
    link:'/courses/skill-courses',
    price: '4,600',
    originalPrice: '5,200',
    discount: '12%',
    startDate: '6 Jun, 2025',
    endDate: '30 Jun, 2026',
    label: 'NEW',
    language: 'Hinglish',
    type: 'Dropper JEE Aspirants',
    image: banner1,
  },
];

const Lecture = () => {
  return (
    <>
    <div className="px-10 pt-20 py-10 bg-linear-gradient(to right, #5790AB, #9CCDDB, #D0D7E1); min-h-screen">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-[#FFF8F0] rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
              <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">ONLINE</div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
              <div className="flex items-center gap-2 text-xs my-2">
                <span className="bg-yellow-400 text-black font-medium px-2 py-0.5 rounded">{course.label}</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">{course.language}</span>
              </div>

              <p className="text-xs text-gray-500 mb-1">For {course.type}</p>
              <p className="text-xs text-gray-500 mb-2">
                Starts on {course.startDate} — Ends on {course.endDate}
              </p>

              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-indigo-600 font-bold text-xl">
                    ₹{course.price}
                    <span className="line-through text-gray-400 text-sm ml-2">
                      ₹{course.originalPrice}
                    </span>
                  </p>
                  <p className="text-green-600 text-sm">Discount of {course.discount} applied</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Link to={course.link} className="w-1/2">
                  <button className="w-full border border-indigo-500 text-indigo-500 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50">
                    EXPLORE COURSE
                  </button>
                </Link>

                <button className="w-1/2 bg-indigo-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-600">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    <Footer/>
    </>
  );
};

export default Lecture;
