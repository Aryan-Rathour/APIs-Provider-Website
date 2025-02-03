import { useState } from "react";
import SignUp from "../pages/signUp"; // Import SignUp component

export default function Login({ setShowLogin = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); // Manage SignUp view

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("userEmail", email); // Save email to localStorage on login
      alert('Login successful!');
      setShowLogin(false); // Close modal after successful login
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md box-border">
        {showSignUp ? (
          <SignUp setShowSignUp={setShowSignUp} />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Login to Your Account
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center justify-between">
              <span className="block w-full h-px bg-gray-300"></span>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <span className="block w-full h-px bg-gray-300"></span>
            </div>

            {/* Social Login Buttons */}
            <button className="w-full mb-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg shadow hover:bg-gray-200 flex items-center justify-center">
              Continue with Google
            </button>

            {/* Sign Up link */}
            <div className="my-4 text-center">
              <p>
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setShowSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
