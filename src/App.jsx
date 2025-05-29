
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Homies from './pages/Home';
import About from './pages/About'; // Create this if not existing
import Lectures from './pages/Lectures'; // Create this if not existing
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import ItCourse from './pages/courses/Itcourse';
import EntranceCourse from './pages/courses/Entrancecourse';
import SchoolCourse from './pages/courses/Schoolcourse';
import LanguageCourse from './pages/courses/Languagecourse';
import CompetitiveCourse from './pages/courses/Competitivecourse';
import SkillCourse from './pages/courses/Skillcourse';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} /> {/* Login page */}
        {/* <Route path="/contact" element={<Contact />} /> */}
         <Route path="/courses/it-coding" element={<ItCourse />} />
        <Route path="/courses/entrance-exams" element={<EntranceCourse />} />
        <Route path="/courses/school-subjects" element={<SchoolCourse />} />
        <Route path="/courses/language-learning" element={<LanguageCourse />} />
        <Route path="/courses/competitive-exams" element={<CompetitiveCourse />} />
        <Route path="/courses/skill-courses" element={<SkillCourse />} />
      </Routes>
    </Router>
  );
};


export default App;
