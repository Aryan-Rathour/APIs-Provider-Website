"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList, 
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Login from "../components/ui/logIn"; // Adjust path as necessary
import { categories } from "@/lib/utils";

interface Subcategory {
  name: string;
  api_info: string;
  api_url: string;
  supported_api_types: string[];
  expected_body_type: string;
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface NavbarProps {
  handleSubcategoryClick: (subcategory: Subcategory) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleSubcategoryClick }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string | null>(null);

  const filteredApis: Category[] = categories.filter((api) =>
    api.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFirstName(parsedUser?.user?.firstName ?? null);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const extractFirstLetter = (email: string | null): string => {
    if (!email) return "";
    const firstName = email.split("@")[0];
    return firstName.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white-100 pt-4">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-primary text-white rounded-full shadow-lg px-6 py-2 flex items-center justify-between w-full max-w-lg">
            <Link href="/">
              <div className="flex items-center justify-center  rounded-full w-10 h-10">
                <Image src="/image (1).png" alt="Logo" width={40} height={40} />
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              {" "}
              <NavigationMenu>
                <NavigationMenuList className="flex text-black font-medium justify-between w-full max-w-lg mx-auto">
                  <NavigationMenuItem className="flex-grow text-center ">
                    <NavigationMenuTrigger className="text-white">
                      APIs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 bg-primary shadow-md rounded-lg z-50 w-[800px]">
                    <div className="w-[800px] p-6">
                        <h3 className="text-black text-lg font-semibold mb-2 text-center">
                          APIs TO LOOK UP
                        </h3>
                        <div className="relative">
                          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="search"
                            placeholder="Search APIs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className=" bg-gray-100 pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 h-auto overflow-y-auto">
                          {filteredApis
                            .flatMap((api) => api.subcategories) 
                            .map((subcategory) => (
                              <div
                                key={subcategory.api_url}
                                onClick={() =>
                                  handleSubcategoryClick(subcategory)
                                }
                                className="bg-white rounded-lg mt-2 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
                              >
                                <p className="text-black font-small">
                                  {subcategory.name}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Other menu items */}
                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/pricing"
                      className="text-white hover:text-gray-300 transition-colors mr-3"
                    >
                      Pricing
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/documentation"
                      className="text-white hover:text-gray-300 transition-colors mx-3"
                    >
                      Docs
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="https://blogswipe-shivank63s-projects.vercel.app/"
                      target="_blank"
                      className="text-white hover:text-gray-300 transition-colors mx-3"
                    >
                      Blogs
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="flex-grow text-center">
                    <Link
                      href="/contactUs"
                      className="text-white hover:text-gray-300 transition-colors mr-3"
                    >
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Conditional display of first letter if logged in */}
            {firstName ? (
              <Link href="/profile">
                <span className="ml-auto bg-purple-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {extractFirstLetter(firstName)}
                </span>
              </Link>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-auto text-white hover:text-gray-300 transition-colors"
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
            <div className="mt-4">
              <Login setShowLogin={() => setShowLogin(false)} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const SearchIcon: React.FC<{ className: string }> = ({ className }) => (
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
