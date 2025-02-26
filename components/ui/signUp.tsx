"use client";

import { useState } from "react";
import usePostRequest from "../../app/services/postApi"; // Import the usePostRequest hook
import Login from "../ui/logIn";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  otp: string;
  password: string;
  profession: string;
}

export default function SignUp({ setShowSignUp }) {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    otp: "",
    password: "",
    profession: "",
  });

  const [showLogin, setShowLogin] = useState(false);
  const [error, setError] = useState("");

  const { mutate } = usePostRequest("/signUpUser");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Basic validation
    if (Object.values(formData).every((field) => field.trim() !== "")) {
      mutate(formData, {
        onSuccess: (data) => {
          if (data.status) {
            localStorage.setItem("user", JSON.stringify(data.data));
            setShowSignUp(false); // Close modal after successful sign-up
          } else {
            console.log(data.message);
            setError(data.message);
          }
        },
        onError: (error) => {
          console.log("Error: ", error);
        },
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md box-border relative">
        {/* Cross Button */}
        <button
          onClick={() => setShowSignUp(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {showLogin ? (
          <Login setShowLogin={setShowLogin} /> // Render Login component if showLogin is true
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h2>
            <form onSubmit={handleSignUp} className="space-y-4">
              {/* First Name & Last Name Fields */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  {error && (
                    <span className="text-red-600 text-sm">{error}</span>
                  )}
                </div>
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

              {/* OTP Field */}
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  placeholder="Enter OTP"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
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

              {/* Profession Field */}
              <div>
                <label
                  htmlFor="profession"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                  placeholder="Enter your profession"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-lg shadow hover:bg-darkPrimary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </form>

            {/* Login link */}
            <div className="my-4 text-center">
              <p>
                Already have an account?{" "}
                <span
                  className="text-complementary cursor-pointer"
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
