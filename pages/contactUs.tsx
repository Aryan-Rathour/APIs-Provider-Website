import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const showToast = () => {
    toast.success("This is a success message!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have any questions or need help? We're here to assist you. Fill out
          the form below or reach out to us directly.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>
            <p className="text-gray-600">
              Our team is here to answer your questions and provide the help you
              need.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">support@apiprovider.com</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              123 API Street, Developer City, CodeLand, 456789
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://solutioneers.in/"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.125 16.5h-2.25v-6h2.25v6zm-1.125-7.5c-.759 0-1.125-.462-1.125-1.125 0-.663.369-1.125 1.125-1.125s1.125.462 1.125 1.125c0 .663-.369 1.125-1.125 1.125z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61563760139403"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04C6.48 2.04 2 6.53 2 12.04c0 4.97 3.65 9.15 8.43 10.61v-7.51H7.75v-3.1h3.68v-2.3c0-3.65 2.14-5.71 5.43-5.71 1.58 0 3.22.11 3.72.16v3.72h-2.5c-2.48 0-3.08 1.17-3.08 2.87v3.03h5.49l-.72 3.1h-4.77v7.51c4.79-1.46 8.43-5.64 8.43-10.61 0-5.51-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/solutioneersinfotech?igsh=NG1meHFkcm1iMTRo"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.3 0 3.7 0 5 0.1 1.3 0.1 2.4 0.6 3.3 1.5s1.4 2 1.5 3.3c0.1 1.3 0.1 1.7 0.1 5s0 3.7-0.1 5c-0.1 1.3-0.6 2.4-1.5 3.3s-2 1.4-3.3 1.5c-1.3 0.1-1.7 0.1-5 0.1s-3.7 0-5-0.1c-1.3-0.1-2.4-0.6-3.3-1.5s-1.4-2-1.5-3.3c-0.1-1.3-0.1-1.7-0.1-5s0-3.7 0.1-5c0.1-1.3 0.6-2.4 1.5-3.3s2-1.4 3.3-1.5c1.3-0.1 1.7-0.1 5-0.1zM12 0c-3.5 0-3.9 0-5.3 0.1-1.4 0.1-2.7 0.7-3.7 1.7-1 1-1.6 2.3-1.7 3.7-0.1 1.4-0.1 1.8-0.1 5.3s0 3.9 0.1 5.3c0.1 1.4 0.7 2.7 1.7 3.7 1 1 2.3 1.6 3.7 1.7 1.4 0.1 1.8 0.1 5.3 0.1s3.9 0 5.3-0.1c1.4-0.1 2.7-0.7 3.7-1.7 1-1 1.6-2.3 1.7-3.7 0.1-1.4 0.1-1.8 0.1-5.3s0-3.9-0.1-5.3c-0.1-1.4-0.7-2.7-1.7-3.7-1-1-2.3-1.6-3.7-1.7-1.4-0.1-1.8-0.1-5.3-0.1zM12 6.5c-3.1 0-5.5 2.4-5.5 5.5s2.4 5.5 5.5 5.5 5.5-2.4 5.5-5.5-2.4-5.5-5.5-5.5zM12 14c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zM18.4 5.5c-0.3 0-0.5 0.1-0.7 0.3-0.2 0.2-0.3 0.4-0.3 0.7 0 0.5 0.4 0.9 0.9 0.9 0.3 0 0.5-0.1 0.7-0.3s0.3-0.4 0.3-0.7c0-0.5-0.4-0.9-0.9-0.9z" />
              </svg>
            </a>
            <a
              href="https://x.com/Solutionee65457"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.003c-.825.365-1.72.612-2.66.721 1.016-.609 1.792-1.572 2.158-2.72-.951.564-2.002.974-3.12 1.195a5.355 5.355 0 0 0-9.12 4.873c-4.39-.22-8.28-2.322-10.88-5.52-.456.78-.72 1.68-.72 2.64 0 1.82.92 3.42 2.32 4.38-.855-.027-1.66-.261-2.36-.653-.057 1.248.79 2.427 1.95 3.05-.716.207-1.48.262-2.28.098.642 1.99 2.47 3.49 4.64 3.56-2.13 1.67-4.76 2.66-7.62 2.66-.49 0-.97-.029-1.45-.084 2.64 1.7 5.79 2.7 9.13 2.7 10.96 0 17.1-9.1 17.1-17.1 0-.26-.01-.51-.03-.76a12.35 12.35 0 0 0 2.92-3.14z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/solutioneers-infotech/"
              target="_blank"
              className="hover:text-gray-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit" onClick={showToast}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition"
            >
              Send Message
            </button>
            
      <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
