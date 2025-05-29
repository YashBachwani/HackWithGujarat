// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup 
} 
// from "../pages/firebase.jsx";
from '../pages/firebase.jsx';

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setLoggedIn(true);
      setUserEmail(result.user.email);
      navigate("/dashboard");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setLoggedIn(true);
      setUserEmail(result.user.email);
      navigate("/dashboard");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert(`Account created for ${result.user.email}. You can now log in.`);
      setIsSignup(false);
    } catch (error) {
      alert("Error during sign up: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      setUserEmail("");
      navigate("/login");
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email to reset password:");
    if (!email) {
      alert("Email is required.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset email sent to ${email}. Check your inbox (and spam).`);
    } catch (error) {
      alert("Error sending password reset email: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center pt-12 h-screen w-full bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          {isSignup ? "Create Account" : "Welcome Back!"}
        </h2>
        <p className="text-gray-600 mb-6">
          {isSignup ? "Sign up to get started" : "Please sign in to continue"}
        </p>

        {loggedIn ? (
          <div>
            <p className="text-green-600 font-semibold mb-2">
              🎉 Logged in as {userEmail}
            </p>
            <button
              onClick={handleSignOut}
              className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 py-3 mb-4 border border-gray-300 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>{isSignup ? "Sign up with Google" : "Sign in with Google"}</span>
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <form onSubmit={isSignup ? handleSignUp : handleEmailLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {!isSignup && (
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-blue-600 hover:underline"
              >
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
