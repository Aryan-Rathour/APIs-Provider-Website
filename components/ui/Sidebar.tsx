// components/Sidebar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  {
    name: 'Weather APIs',
    subcategories: [
      { name: 'Current Weather', url: '/weather/current-weather' },
      { name: 'Forecast', url: '/weather/forecast' },
      { name: 'Historical Data', url: '/weather/historical-data' },
      { name: 'Severe Alerts', url: '/weather/severe-alerts' },
      { name: 'Air Quality', url: '/weather/air-quality' },
    ],
  },
  {
    name: 'Social Media APIs',
    subcategories: [
      { name: 'Twitter API', url: '/social-media/twitter-api' },
      { name: 'Instagram API', url: '/social-media/instagram-api' },
      { name: 'Facebook API', url: '/social-media/facebook-api' },
      { name: 'LinkedIn API', url: '/social-media/linkedin-api' },
      { name: 'YouTube API', url: '/social-media/youtube-api' },
    ],
  },
  {
    name: 'Finance APIs',
    subcategories: [
      { name: 'Stock Market', url: '/finance/stock-market' },
      { name: 'Cryptocurrency', url: '/finance/cryptocurrency' },
      { name: 'Exchange Rates', url: '/finance/exchange-rates' },
      { name: 'Banking Data', url: '/finance/banking-data' },
      { name: 'Payment Gateway', url: '/finance/payment-gateway' },
    ],
  },
  {
    name: 'Geolocation APIs',
    subcategories: [
      { name: 'IP Geolocation', url: '/geolocation/ip-geolocation' },
      { name: 'Location Map', url: '/geolocation/location-map' },
      { name: 'Reverse Geocoding', url: '/geolocation/reverse-geocoding' },
      { name: 'Time Zone Info', url: '/geolocation/time-zone-info' },
    ],
  },
  {
    name: 'News APIs',
    subcategories: [
      { name: 'Global News', url: '/news/global-news' },
      { name: 'Local News', url: '/news/local-news' },
      { name: 'Tech News', url: '/news/tech-news' },
      { name: 'Sports News', url: '/news/sports-news' },
      { name: 'Weather Alerts', url: '/news/weather-alerts' },
    ],
  },
  {
    name: 'Sports APIs',
    subcategories: [
      { name: 'Live Scores', url: '/sports/live-scores' },
      { name: 'Team Stats', url: '/sports/team-stats' },
      { name: 'Player Data', url: '/sports/player-data' },
      { name: 'Match Highlights', url: '/sports/match-highlights' },
      { name: 'League Standings', url: '/sports/league-standings' },
    ],
  },
];

const Sidebar = ({ subcategory, apiName , onSubcategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (apiName) {
      setActiveCategory(apiName);
    }
  }, [apiName]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const handleSubcategoryClick = (url) => {
    if (onSubcategoryClick) {
      onSubcategoryClick(url);
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen px-5 overflow-y-auto">
      <h2 className="text-xl font-bold mb-5">API Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <div
              onClick={() => handleCategoryClick(category.name)}
              className={`cursor-pointer py-2 px-4 rounded-md mb-2 flex items-center justify-between ${
                activeCategory === category.name
                  ? 'bg-blue-500'
                  : 'hover:bg-blue-700'
              }`}
            >
              <span>{category.name}</span>
              <span>{activeCategory === category.name ? '▼' : '►'}</span>
            </div>
            {activeCategory === category.name && (
              <ul className="ml-5">
                {category.subcategories.map((sub) => (
                  <li key={sub.url} className="py-1 text-sm">
                    <button
                      onClick={() => handleSubcategoryClick(sub.url)}
                      className={`block rounded-md px-2 py-1 ${
                        subcategory?.url === sub.url
                          ? 'bg-green-600 text-white'
                          : 'text-green-500 hover:bg-blue-600'
                      }`}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
