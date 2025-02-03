// components/Sidebar.js

import Link from "next/link";

import { useState } from "react";

const categories = [
  {
    name: "Weather APIs",
    subcategories: [
      { name: "Current Weather", url: "/weather/current-weather" },
      { name: "Forecast", url: "/weather/forecast" },
      { name: "Historical Data", url: "/weather/historical-data" },
      { name: "Severe Alerts", url: "/weather/severe-alerts" },
      { name: "Air Quality", url: "/weather/air-quality" },
    ],
  },
  {
    name: "Social Media APIs",
    subcategories: [
      { name: "Twitter API", url: "/social-media/twitter-api" },
      { name: "Instagram API", url: "/social-media/instagram-api" },
      { name: "Facebook API", url: "/social-media/facebook-api" },
      { name: "LinkedIn API", url: "/social-media/linkedin-api" },
      { name: "YouTube API", url: "/social-media/youtube-api" },
    ],
  },
  {
    name: "Finance APIs",
    subcategories: [
      { name: "Stock Market", url: "/finance/stock-market" },
      { name: "Cryptocurrency", url: "/finance/cryptocurrency" },
      { name: "Exchange Rates", url: "/finance/exchange-rates" },
      { name: "Banking Data", url: "/finance/banking-data" },
      { name: "Payment Gateway", url: "/finance/payment-gateway" },
    ],
  },
  {
    name: "Geolocation APIs",
    subcategories: [
      { name: "IP Geolocation", url: "/geolocation/ip-geolocation" },
      { name: "Location Map", url: "/geolocation/location-map" },
      { name: "Reverse Geocoding", url: "/geolocation/reverse-geocoding" },
      { name: "Time Zone Info", url: "/geolocation/time-zone-info" },
    ],
  },
  {
    name: "News APIs",
    subcategories: [
      { name: "Global News", url: "/news/global-news" },
      { name: "Local News", url: "/news/local-news" },
      { name: "Tech News", url: "/news/tech-news" },
      { name: "Sports News", url: "/news/sports-news" },
      { name: "Weather Alerts", url: "/news/weather-alerts" },
    ],
  },
  {
    name: "Sports APIs",
    subcategories: [
      { name: "Live Scores", url: "/sports/live-scores" },
      { name: "Team Stats", url: "/sports/team-stats" },
      { name: "Player Data", url: "/sports/player-data" },
      { name: "Match Highlights", url: "/sports/match-highlights" },
      { name: "League Standings", url: "/sports/league-standings" },
    ],
  },
  // Add remaining categories similarly...
];


const Sidebar = ({ onSubcategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="flex">
. ..        <div className="w-64 bg-gray-800 text-white h-screen px-5 overflow-y-auto">
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
                      onClick={() => onSubcategorySelect(subcategory.url)}
                    >
                      {subcategory.name}
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
