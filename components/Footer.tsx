import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

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
          <h2 className="text-xl font-bold mb-4 text-complementary">
            APIProvider
          </h2>
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
          <h3 className="text-lg font-semibold mb-4 text-complementary">
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
          <h3 className="text-lg font-semibold mb-4 text-complementary">
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
          <h3 className="text-lg font-semibold mb-4 text-complementary">
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
          <h3 className="text-lg font-semibold mb-4 text-complementary">
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
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-darkPrimary transition">
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
      </div>
    </footer>
  );
}
