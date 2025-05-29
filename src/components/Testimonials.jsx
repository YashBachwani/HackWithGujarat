import React,{useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../pages/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonials = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (ms)
        once: true,     // whether animation should happen only once
      });
      AOS.refresh();
    }, []);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  const testimonials = [
    {
      name: 'Anusha Daryani',
      role: 'Instagram Influencer',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
    {
      name: 'Yash Bachwani',
      role: 'Content Creator',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    },
    {
      name: 'Trishna Chhabria',
      role: 'Marketing Manager',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
    {
      name: 'Anusha Pritmani',
      role: 'Instagram Influencer',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
    {
      name: 'Yash Bachwani',
      role: 'Content Creator',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    },
    {
      name: 'Trishna Chhabria',
      role: 'Marketing Manager',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
  ];

  return (
    <>
    <div data-aos="fade-left"
     data-aos-duration="3000">
    <div className="w-full px-4 py-10 bg-transparent">
      <Slider {...settings}>
        {testimonials.map((user, index) => (
          <div
            key={index}
            className="text-sm w-80 mx-auto pt-16 pb-6 rounded-xl border border-black/60 backdrop-blur-lg bg-black/1 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="h-24 w-24 absolute -top-12 rounded-full border-4 border-white shadow-md object-cover transition-all duration-500"
                src={user.img}
                alt={`userImage${index + 1}`}
              />
              <div className="pt-12 text-center">
                <h1 className="text-lg font-semibold text-black">{user.name}</h1>
                <p className="text-gray-600">{user.role}</p>
              </div>
            </div>
            <p className="text-black/80 px-6 text-center">
              I've been using imagify for nearly two years, primarily for Instagram,
              and it has been incredibly user-friendly, making my work much easier.
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#FF532E"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.4 8.168L12 18.897l-7.334 3.869 1.4-8.168L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};

export default Testimonials;
