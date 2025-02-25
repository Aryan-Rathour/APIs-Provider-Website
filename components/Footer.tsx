import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    setEmail("");
    e.preventDefault();
    toast.success("Subscribed successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">APIProvider</h2>
          <p className="text-sm">
            Delivering robust and reliable APIs to empower developers and
            businesses. Explore, build, and innovate with ease.
          </p>
          {/* <button className="w-20 text-lg text-purple-900 font-bold py-2 my-6 ml-16 rounded-md hover:text-purple-500 transition">
            Sign up
          </button> */}
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/pricing" className="hover:text-gray-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-gray-500">
                Documentation
              </a>
            </li>
            <li>
              <a href="/apis" className="hover:text-gray-500">
                APIs
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-500">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contactUs" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Popular APIs
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/pricing" className="hover:text-gray-500">
                Public APIs
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-gray-500">
                SpaceX API
              </a>
            </li>
            <li>
              <a href="/apis" className="hover:text-gray-500">
                Instagram Graph API
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-gray-500">
                DeepAI API
              </a>
            </li>
            <li>
              <a href="/contactUs" className="hover:text-gray-500">
                Yahoo Finance API
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:text-gray-500">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-500">
                Support
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get the latest updates and insights.
          </p>
          <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} APIProvider. All rights reserved.
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
      </div>
    </footer>
  );
}
