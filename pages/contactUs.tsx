export default function ContactUs() {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Have any questions or need help? We're here to assist you. Fill out the form below or reach out to us directly.
          </p>
        </div>
  
        {/* Contact Form & Info */}
        <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
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
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
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
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              <p className="text-gray-600">
                Our team is here to answer your questions and provide the help you need.
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
                href="https://twitter.com"
                className="hover:text-gray-500"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 19c11 0 16-9 16-16v-1A11 11 0 0022 2a8 8 0 01-3 1 4 4 0 001-2 8 8 0 01-3 1 4 4 0 00-7 3 11 11 0 01-8-4 4 4 0 001 5 4 4 0 01-2-.6v.1a4 4 0 003 4 4 4 0 01-2 .1 4 4 0 003 3 8 8 0 01-6 2 11 11 0 008 4" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="hover:text-gray-500"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008 11.3c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.4-4.1-1.4a3.2 3.2 0 00-1.4-1.8c-1.2-.9.1-.9.1-.9a2.5 2.5 0 011.8 1.3 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.8-.3-5.6-1.4-5.6-6a4.5 4.5 0 011.2-3.2 4 4 0 01.1-3s1-.3 3.3 1.3a11 11 0 016 0c2.2-1.6 3.3-1.3 3.3-1.3a4 4 0 01.1 3 4.5 4.5 0 011.2 3.2c0 4.6-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.1v3c0 .3.2.7.8.6A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-500"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  