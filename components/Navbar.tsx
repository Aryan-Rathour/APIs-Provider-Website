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
    <nav className="bg-white-100 py-4 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-indigo-800 text-white rounded-full shadow-lg px-6 py-2 flex items-center justify-between w-full max-w-lg">
            <Link href="/">
              <div className="flex items-center justify-center bg-black rounded-full w-10 h-10">
                <Image src="/image (1).png" alt="Logo" width={20} height={20} />
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6 text-black font-medium">
                  <NavigationMenuItem className="text-white relative mx-4">
                    <Link href="/pricing">Pricing</Link>
                    <NavigationMenuTrigger className="text-white hover:text-blue-600 transition-colors">
                      APIs
                    </NavigationMenuTrigger>
                    <Link href="/documentation" className="mx-4">Docs</Link>
                    <Link href="/contactUs" className="mx-4">Contact us</Link>
                    {/* Dropdown content */}
                    <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 shadow-md rounded-lg z-50">
                      <div className="w-[800px] p-6">
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-2 text-center">
                            APIs TO LOOK UP
                          </h3>
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              type="search"
                              placeholder="Search APIs..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {filteredApis.map((api) => (
                            <Link key={api.name} href={api.link}>
                              <div className="group relative cursor-pointer">
                                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                                  <h4 className="font-medium text-sm">
                                    {api.name}
                                  </h4>
                                  <p className="text-sm text-gray-500 mt-1">
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
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {/* Conditional display of first letter if logged in */}
            {userEmail ? (
              <Link href='/profile'>
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
              className={`absolute ${modalPosition === "top-right" ? "bottom-56 right-4" : "bottom-80 right-80"} text-gray-600 hover:text-gray-900 text-xl font-bold z-50`}
              >
              ✕
            </button>
            <div className="mt-4">
              <Login />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
