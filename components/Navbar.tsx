"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Login from "../pages/logIn"; // Adjust path as necessary

const apis = [
  {
    name: "Random User API",
    description: "Generate random user data",
    link: "/random-user",
  },
  {
    name: "Weather API",
    description: "Get current weather information",
    link: "/weather",
  },
  { name: "Joke API", description: "Fetch random jokes", link: "/jokes" },
  {
    name: "Quote API",
    description: "Get inspirational quotes",
    link: "/quotes",
  },
  {
    name: "News API",
    description: "Fetch latest news articles",
    link: "/news",
  },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [modalPosition, setModalPosition] = useState("top-right"); // default position

  const filteredApis = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Check if the user is logged in by checking local storage for email
    const storedEmail = localStorage.getItem("userEmail");
    console.log("Stored Email:", storedEmail); // Check if email is fetched from localStorage
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []); // Empty dependency array ensures it only runs once after the initial render

  const extractFirstLetter = (email) => {
    if (!email) return "";
    const firstName = email.split("@")[0]; // Just get the first part of the email
    return firstName.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white-100 pt-4">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-indigo-800 text-white rounded-full shadow-lg px-6 py-2 flex items-center justify-between w-full max-w-lg">
            <Link href="/">
              <div className="flex items-center justify-center  rounded-full w-10 h-10">
                <Image src="/image (1).png" alt="Logo" width={40} height={40} />
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              {" "}
              {/* Increased spacing here */}
              <NavigationMenu>
                <NavigationMenuList className="flex text-black font-medium justify-between w-full max-w-lg mx-auto">
                  <NavigationMenuItem className="flex-grow text-center">
                    <NavigationMenuTrigger className="text-white hover:text-blue-600 transition-colors">
                      APIs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 bg-purple-500 shadow-md rounded-lg z-50">
                      <div className="w-[800px] p-6">
                        <h3 className="text-lg font-semibold mb-2 text-center">
                          APIs TO LOOK UP
                        </h3>
                        <div className="relative">
                          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="search"
                            placeholder="Search APIs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {filteredApis.map((api) => (
    <Link key={api.name} href={api.link}>
      <div className="group relative cursor-pointer transform transition-transform duration-200 hover:scale-105">
        <div className="bg-white rounded-lg py-2 pl-2 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          {/* New Tag */}
            <span className="absolute top-0 right-0 bg-green-500 opacity-50 text-white text-xs px-2 py-1 rounded-bl-2xl rounded-tr-lg">
              New
            </span>
          
          <h4 className="font-semibold text-base text-gray-900 mt-2">
            {api.name}
          </h4>
          <p className="text-xs text-gray-700 ">
            {api.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Other menu items */}
                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/pricing"
                      className="text-white hover:text-blue-600 transition-colors mr-3"
                    >
                      Pricing
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/documentation"
                      className="text-white hover:text-blue-600 transition-colors mx-3"
                    >
                      Docs
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="https://blogswipe-shivank63s-projects.vercel.app/"
                      target="_blank"
                      className="text-white hover:text-blue-600 transition-colors mx-3"
                    >
                      Blogs
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/contactUs"
                      className="text-white hover:text-blue-600 transition-colors mr-3"
                    >
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Conditional display of first letter if logged in */}
            {userEmail ? (
              <Link href="/profile">
                <span className="ml-auto bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {extractFirstLetter(userEmail)}
                </span>
              </Link>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-auto hover:text-blue-600 transition-colors"
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className={`absolute ${
                modalPosition === "top-right"
                  ? "bottom-56 right-4"
                  : "bottom-80 right-80"
              } text-gray-600 hover:text-gray-900 text-xl font-bold z-50`}
            >
              ✕
            </button>
            <div className="mt-4">
              <Login setShowLogin={setShowLogin} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

export default Navbar;
