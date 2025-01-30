// components/Sidebar.js

import { useState } from "react";

const categories = [
  {
    name: "Weather APIs",
    subcategories: ["Current Weather", "Forecast", "Historical Data"]
  },
  {
    name: "Social Media APIs",
    subcategories: ["Twitter API", "Instagram API", "Facebook API"]
  },
  {
    name: "Finance APIs",
    subcategories: ["Stock Market", "Cryptocurrency", "Exchange Rates"]
  },
  {
    name: "Geolocation APIs",
    subcategories: ["IP Geolocation", "Location Map"]
  },
  {
    name: "News APIs",
    subcategories: ["Global News", "Local News"]
  },
  {
    name: "Sports APIs",
    subcategories: ["Live Scores", "Team Stats", "Player Data"]
  },
  {
    name: "Music APIs",
    subcategories: ["Song Info", "Album Details", "Artist Data"]
  },
  {
    name: "E-commerce APIs",
    subcategories: ["Product Search", "Pricing", "Inventory"]
  },
  {
    name: "Entertainment APIs",
    subcategories: ["Movies", "TV Shows", "Streaming"]
  },
  {
    name: "Health APIs",
    subcategories: ["Fitness Trackers", "Health Stats"]
  },
  {
    name: "Government APIs",
    subcategories: ["Census Data", "Legal Data"]
  },
  {
    name: "Education APIs",
    subcategories: ["Course Data", "University Info"]
  }
];

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white h-screen p-5">
        <h2 className="text-xl font-bold mb-5">API Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <div
                onClick={() => handleCategoryClick(category.name)}
                className={`cursor-pointer py-2 px-4 rounded-md mb-2 flex items-center ${
                  activeCategory === category.name
                    ? "bg-blue-500"
                    : "hover:bg-blue-700"
                }`}
              >
                {/* Arrow Icon */}
                <span
                  className={`mr-3 ${
                    activeCategory === category.name ? "rotate-90" : ""
                  }`}
                >
                  {activeCategory === category.name ? "▼" : "►"}
                </span>
                {category.name}
              </div>

              {/* Show Subcategories */}
              {activeCategory === category.name && (
                <ul className="ml-8">
                  {category.subcategories.map((subcategory, index) => (
                    <li
                      key={index}
                      className="py-2 text-sm text-green-500 cursor-pointer hover:bg-blue-600 rounded-md"
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
