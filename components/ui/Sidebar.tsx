import { useState, useEffect } from "react";
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

interface SidebarProps {
  subcategory?: Subcategory;
  apiName?: string;
  onSubcategoryClick?: (subcategory: Subcategory) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ subcategory, apiName, onSubcategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (apiName) {
      setActiveCategory(apiName);
    }
  }, [apiName]);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    setLoading(true);
    setSelectedSubcategory(subcategory);
    
    setTimeout(() => {
      setLoading(false);
      if (onSubcategoryClick) {
        onSubcategoryClick(subcategory);
      }
    }, 1000);
  };


  return (
    <div className="w-64 bg-gray-800 text-white h-screen px-5 overflow-y-auto">
      <h2 className="text-xl font-bold my-5 mt-20">API Categories</h2>
      <ul>
        {categories.map((category: Category) => (
          <li key={category.name}>
            <div
              onClick={() => handleCategoryClick(category.name)}
              className={`cursor-pointer py-2 px-4 rounded-md mb-2 flex items-center justify-between transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-blue-500"
                  : "hover:bg-blue-700"
              }`}
            >
              <span>{category.name}</span>
              <span>{activeCategory === category.name ? "▼" : "►"}</span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCategory === category.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="ml-5">
                {category.subcategories.map((sub) => (
                  <li key={`${category.name}-${sub.api_url}`} className="py-1 text-sm">
                  <button
                      onClick={() => handleSubcategoryClick(sub)}
                      className={`block rounded-md px-2 py-1 w-full text-left transition-all duration-100 ${
                        selectedSubcategory?.api_url === sub.api_url
                          ? "bg-primary text-white" 
                          : "text-primary hover:bg-blue-600"
                      }`}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
