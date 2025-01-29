import { useState } from "react";
import Login from "../pages/login"; // Import the Login component

export default function SignUp({ setShowSignUp }) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [showLogin, setShowLogin] = useState(false); // Manage Login view

  const handleSignUp = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && otp && password && profession) {
      alert('Sign Up successful!');
      setShowSignUp(false); // Close modal after successful sign-up
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md box-border">
        {showLogin ? (
          <Login setShowLogin={setShowLogin} /> // Render Login component if showLogin is true
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h2>
            <form onSubmit={handleSignUp} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* OTP Field */}
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  placeholder="Enter OTP"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Profession Field */}
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                  placeholder="Enter your profession"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center justify-between">
              <span className="block w-full h-px bg-gray-300"></span>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <span className="block w-full h-px bg-gray-300"></span>
            </div>

            {/* Social Login Buttons */}
            {/* <button className="w-full mb-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg shadow hover:bg-gray-200 flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12V14.706h-2.703v-3.396H12V8.348c0-2.645 1.617-4.09 3.982-4.09 1.133 0 2.106.084 2.39.122v2.773l-1.638.001c-1.285 0-1.535.611-1.535 1.506v1.976h3.07l-.401 3.395h-2.669V24h5.229C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
              Continue with Facebook
            </button> */}
            <button className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg shadow hover:bg-gray-200 flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.69 0 6.65 1.6 8.65 3.22l6.32-6.22C35.1 2.8 29.87 0 24 0 14.85 0 7.08 5.45 3.69 13.33l7.49 5.83C13.04 13.2 18.08 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.15 24.54c0-1.58-.14-3.1-.42-4.54H24v9.1h12.65c-.56 3.04-2.16 5.63-4.59 7.44v6.04h7.42c4.34-3.99 6.86-9.87 6.86-18.04z"
                />
                <path
                  fill="#4A90E2"
                  d="M7.1 14.89l7.48 5.83c1.32-3.9 5.18-6.72 9.42-6.72 3.56 0 6.83 1.66 8.98 4.28l7.25-7.16C37.55 5.45 31.24 1.9 24 1.9c-7.2 0-13.45 2.86-18.03 7.96L7.1 14.89z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Login link */}
            <div className="my-4 text-center">
              <p>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setShowLogin(true)} // Show Login component
                >
                  Log In
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
