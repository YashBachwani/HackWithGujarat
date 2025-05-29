import React from 'react';
import { useNavigate } from 'react-router-dom'; // only if you use react-router

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: clear token/session
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-purple-100 via-yellow-50 to-pink-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Logo"
              className="w-10 h-10"
            />
            EDUCATION.co
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-purple-500 to-yellow-400 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Log Out
            </button>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-purple-500"
            />
          </div>
        </header>

        {/* Statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <StatCard title="110h" description="Total Hours" gradient="from-purple-400 to-purple-600" />
          <StatCard title="150" description="Completed Courses" gradient="from-yellow-400 to-yellow-600" />
          <StatCard title="220k" description="Total Students" gradient="from-pink-400 to-pink-600" />
        </section>

        {/* Main Content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Popular Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold">Popular Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CourseCard
                image="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hSUgU96SUK21AnVfp6Mm0g.jpeg"
                title="Book Cover Design"
                description="Design eye-catching book covers with creative tools."
                students="120"
                rating="5"
              />
              <CourseCard
                image="https://i.pinimg.com/736x/e2/73/67/e27367f074fd5004f07f519a61fed630.jpg"
                title="Online Book Maker"
                description="Create and publish your own e-books effortlessly."
                students="200"
                rating="4.8"
              />
              <CourseCard
                image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                title="Python for Beginners"
                description="Master the basics of Python programming in weeks."
                students="300"
                rating="4.9"
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl shadow p-4 text-center text-white">
              <h3 className="font-bold mb-2">My Courses</h3>
              <div className="h-24 flex items-center justify-center font-bold">Chart 📊</div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Appointments</h3>
              <div className="text-sm text-center">October 2023</div>
              <div className="grid grid-cols-7 text-xs text-center gap-1 mt-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                  <span key={d}>{d}</span>
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={`blank-${i}`}></span>
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={`day-${i}`}
                    className={i === 14 ? 'bg-purple-500 text-white rounded-full px-1' : ''}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Mentor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">Annette Black</p>
                <button className="text-purple-600 text-xs hover:underline">
                  Follow
                </button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

// Reusable components
const StatCard = ({ title, description, gradient }) => (
  <div
    className={`bg-gradient-to-r ${gradient} text-white rounded-2xl p-6 shadow hover:scale-105 transition`}
  >
    <h2 className="text-3xl font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

const CourseCard = ({ image, title, description, students, rating }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 hover:scale-105 transition">
    <img
      src={image}
      alt={title}
      className="rounded-lg mb-2 h-32 w-full object-cover"
    />
    <h4 className="font-bold">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
    <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
      <span>👥 {students}</span>
      <span>⭐ {rating}</span>
    </div>
  </div>
);

export default Dashboard;
