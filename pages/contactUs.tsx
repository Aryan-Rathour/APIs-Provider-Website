import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

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
        <h1 className="text-4xl font-extrabold text-complementary">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Have any questions or need help? We're here to assist you. Fill out
          the form below or reach out to us directly.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold ">Contact Information</h2>
            <p className="text-gray-600">
              Our team is here to answer your questions and provide the help you
              need.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">info@solutioneers.in</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 7376700783 </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              Indira Nagar, Lucknow, Uttar Pradesh
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://solutioneers.in/"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/website.png" alt="Firefox" width={20} height={20} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61563760139403"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/facebook.png" alt="Firefox" width={20} height={20} />
            </a>

            <a
              href="https://www.instagram.com/solutioneersinfotech?igsh=NG1meHFkcm1iMTRo"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Firefox"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://x.com/Solutionee65457"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/X.png" alt="Firefox" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/solutioneers-infotech/"
              target="_blank"
              className="hover:text-primary"
            >
              <Image src="/linkedin.png" alt="Firefox" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-complementary mb-6">
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
              type="submit"
              onClick={showToast}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-darkPrimary transition"
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
