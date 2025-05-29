import React,{useEffect} from 'react';
import './TagScroller.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TagScroller = () => {
  const tags = [
    'JavaScript', 'React', 'Figma', 'HTML5', 'Node.js',
    'CSS', 'Tailwind', 'UX Design', 'SVG', 'TypeScript',
    'Web Development', 'UI Design', 'Frontend', 'Backend',
  ];
  
  useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration (ms)
          once: true,     // whether animation should happen only once
        });
        AOS.refresh();
      }, []);

  return (
    <>
     <div data-aos="fade-right"
            data-aos-duration="3000">
    <div className="tag-container">
      <div className="fade" />
      <div className="tag-list">
        <div className="inner">
          {[...tags, ...tags].map((tag, index) => (
            <div className="tag" key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default TagScroller;
