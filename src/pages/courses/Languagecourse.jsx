import React,{useEffect} from 'react';
import Footer from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const languages = [
  {
    title: 'Spoken English Pro',
    price: '₹1,100',
    originalPrice: '₹1,600',
    discount: '31%',
    image: 'https://www.shutterstock.com/shutterstock/photos/2245371889/display_1500/stock-photo-magnifier-focus-to-english-language-translation-or-translate-on-worldwide-language-conversation-2245371889.jpg',
      },
  {
    title: 'Hindi for Beginners',
    price: '₹950',
    originalPrice: '₹1,300',
    discount: '27%',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?fit=crop&w=800&q=60',
  },
  {
    title: 'Learn French Basics',
    price: '₹1,250',
    originalPrice: '₹1,900',
    discount: '34%',
    image: 'https://i.etsystatic.com/40967743/r/il/016c67/5695516265/il_1588xN.5695516265_jshl.jpg',
  },
];

const LanguageLearning = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-center">Language Learning</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {languages.map((lang, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 border">
            <img
              src={lang.image}
              alt={lang.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{lang.title}</h2>
            <p className="text-indigo-600 text-xl font-bold">{lang.price} <span className="line-through text-gray-500 text-sm ml-2">{lang.originalPrice}</span></p>
            <p className="text-green-600 text-sm">Save {lang.discount}</p>
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

export default LanguageLearning;
