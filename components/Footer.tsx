export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">APIProvider</h2>
          <p className="text-sm">
            Delivering robust and reliable APIs to empower developers and
            businesses. Explore, build, and innovate with ease.
          </p>
          <button className="w-20 text-lg text-purple-900 font-bold py-2 my-6 ml-16 rounded-md hover:text-purple-500 transition">
            Sign up
          </button>
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
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} APIProvider. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="hover:text-gray-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 19c11 0 16-9 16-16v-1A11 11 0 0022 2a8 8 0 01-3 1 4 4 0 001-2 8 8 0 01-3 1 4 4 0 00-7 3 11 11 0 01-8-4 4 4 0 001 5 4 4 0 01-2-.6v.1a4 4 0 003 4 4 4 0 01-2 .1 4 4 0 003 3 8 8 0 01-6 2 11 11 0 008 4" />
              </svg>
            </a>
            <a href="https://github.com" className="hover:text-gray-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008 11.3c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.4-4.1-1.4a3.2 3.2 0 00-1.4-1.8c-1.2-.9.1-.9.1-.9a2.5 2.5 0 011.8 1.3 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.8-.3-5.6-1.4-5.6-6a4.5 4.5 0 011.2-3.2 4 4 0 01.1-3s1-.3 3.3 1.3a11 11 0 016 0c2.2-1.6 3.3-1.3 3.3-1.3a4 4 0 01.1 3 4.5 4.5 0 011.2 3.2c0 4.6-2.9 5.7-5.6 6a2.8 2.8 0 01.8 2.1v3c0 .3.2.7.8.6A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-500">
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
