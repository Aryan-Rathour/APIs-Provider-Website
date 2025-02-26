import { useState } from "react";
import SignUp from "../ui/signUp"; // Import SignUp component
import usePostRequest from "@/app/services/postApi";

export default function Login({ setShowLogin = () => {} }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showSignUp, setShowSignUp] = useState(false); // Manage SignUp view
  const { mutate } = usePostRequest('/userlogin');

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      mutate(formData, {
        onSuccess: (data) => {
          console.log(data);
          alert('Login successful!');
          setShowLogin(false);
        },
        onError: (error) => {
          console.log(error);
        }
      });
      console.log(formData);
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md box-border relative">
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-lg shadow hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
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
                  className="text-complementary cursor-pointer"
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
