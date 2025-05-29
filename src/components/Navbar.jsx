import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../pages/firebase.jsx"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Lectures", path: "/lectures" },
    { name: "Contact", path: "/#contact" },
    { name: "About", path: "#about" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav
      style={{
        backgroundColor: !isScrolled
          ? "linear-gradient(to right, #4A7F9F, #6EAEC6)"
          : undefined,
      }}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-transparent shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <span
          className={`text-xl font-semibold tracking-wide ${
            isScrolled ? "text-gray-700" : "text-black"
          }`}
        >
          🎓 Educater's
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-black"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-black"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <svg
          className={`h-6 w-6 ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        />
        {!isAuthPage && !isLoggedIn && (
          <Link to="/login">
            <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
              Login
            </button>
          </Link>
        )}
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-blue-600 to-blue-300 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {!isAuthPage && !isLoggedIn && (
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
