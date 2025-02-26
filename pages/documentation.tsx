import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Clipboard, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import Sidebar from "@/components/ui/sidebar";
import useFetchData from "@/app/services/getApi.js";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Loader from "../components/ui/Loader.tsx";
import Login from "@/components/ui/logIn.tsx";

export interface Subcategory {
  name?: string;
  api_url?: string;
  api_info?: string;
  supported_api_types?: string;
  expected_body_type?: string;
}

const Docs: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("python");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showJson, setShowJson] = useState<boolean>(false);
  const [JSONCopied, setIsJSONCopied] = useState<boolean>(false);
  const [isCopyUrl, setIsCopyUrl] = useState<boolean>(false);
  const [accessKey, setAccessKey] = useState<string | null>(null); // Initialize state for accessKey
  const [isCopyAccessKey, setIsCopyAccessKey] = useState<boolean>(false);
  const [subcategory, setSubcategory] = useState<Subcategory>({});
  const [apiName, setApiName] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedSidebarSubcategory, setSelectedSidebarSubcategory] =
    useState<Subcategory | null>();
  const [selectedApiUrl, setSelectedApiUrl] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const userDataString = localStorage.getItem("user");

    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        if (userData?.accessKey) {
          setAccessKey(userData.accessKey);
        } else {
          setAccessKey(null);
        }
      } catch (e) {
        console.error("Error parsing user data:", e);
        setAccessKey(null);
      }
    } else {
      setAccessKey(null);
    }
  }, []);

  useEffect(() => {}, [selectedSidebarSubcategory]);

  const codeSnippets: Record<string, string> = {
    python: `import requests
url = "${
      selectedSidebarSubcategory?.api_url
        ? `http://localhost:5000${selectedSidebarSubcategory?.api_url}`
        : "https://www.example.com/"
    }"
headers = {'Authorization': 'Bearer YOUR_API_KEY'}
response = requests.get(url, headers=headers)
print(response.json())`,
    javascript: `const fetch = require('node-fetch');
const url = "${
      selectedSidebarSubcategory?.api_url
        ? `http://localhost:5000${selectedSidebarSubcategory?.api_url}`
        : "https://www.example.com/"
    }"
const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    javascriptBrowser: `fetch("${
      selectedSidebarSubcategory?.api_url
        ? `http://localhost:5000${selectedSidebarSubcategory?.api_url}`
        : "https://www.example.com/"
    }"

    }", {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data: JSONdata, refetch } = useFetchData(selectedApiUrl);

  const handleTryIt = (api: string) => {
    console.log("tryit",api)
    if (api) {
      setSelectedApiUrl(`${api}`);

      setShowJson(!showJson);
      refetch();
    }
  };

  const handleCopy = () => {
    const codeSnippet = codeSnippets[selectedLanguage];
    if (codeSnippet) {
      const codeWithcomment = `${codeSnippet}\n//solutioners infotech`;
      navigator.clipboard
        .writeText(codeWithcomment)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(`http://localhost:5000
      ${
        selectedSidebarSubcategory?.api_url
          ? selectedSidebarSubcategory?.api_url
          : `https://www.example.com/`
      }`);
    setIsCopyUrl(true);
    setTimeout(() => setIsCopyUrl(false), 2000);
  };

  const handleCopyAccessKey = () => {
    navigator.clipboard.writeText(accessKey || "");
    setIsCopyAccessKey(true);
    setTimeout(() => setIsCopyAccessKey(false), 2000);
  };

  const handleJSONCopy = (Jsondata: Record<string, unknown>) => {
    const jsonData = JSON.stringify(Jsondata, null, 2);
    navigator.clipboard
      .writeText(jsonData)
      .then(() => {
        setIsJSONCopied(true);
        setTimeout(() => {
          setIsJSONCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Error copying JSON data: ", err);
      });
  };

  if (!isClient) {
    return null;
  }

  const handleFullResponse = (Jsondata: Record<string, unknown>) => {
    const jsonData = JSON.stringify(Jsondata, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");
  };

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    setSubcategory(subcategory);
    setApiName(subcategory.api_info || "");
  };

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    setIsLoading(true);
    setSelectedSidebarSubcategory(subcategory);
    setTimeout(() => {
      setSelectedSidebarSubcategory(subcategory);
      setIsLoading(false);
    }, 1000);
  };

  const handleLoginSuccess = () => {
    setShowLogin(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };


const handleCloseLogin = () => {
  setShowLogin(false);
};

  return (
    <div>
      <div className="flex-1 px-12">{isLoading ? <Loader /> : <></>}</div>
      <Navbar handleSubcategoryClick={handleSubcategoryClick} />
      {showLogin && <Login onLoginSuccess={handleLoginSuccess} onClose={handleCloseLogin} />}

      <div className="fixed top-0 left-0 w-1/6 h-screen bg-gray-800 text-white overflow-y-auto">
        <Sidebar
          subcategory={subcategory}
          apiName={apiName}
          onSubcategoryClick={handleSubcategorySelect}
        />
      </div>
      <ScrollToTop />
      <div className="flex pl-60 pt-4">
        <div className="flex-1 w-5/6 px-12">
          <header className="text-center py-4 px-4">
            <h1
              className=" text-4xl font-semibold text-complementary mb-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              API Documentation
            </h1>
            <h2>{selectedSubcategory}</h2>
            <p className="text-lg text-gray-600">
              Welcome to the API documentation page. Below you will find code
              examples, animations, and your API access key.
            </p>
          </header>

          <section id="api-information" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              API Information
            </h2>
            <p className="text-lg text-gray-700">
              {" "}
              {selectedSidebarSubcategory?.api_info ||
                `Welcome to the [API Name] documentation. Our API allows you to
              integrate powerful features into your applications, providing
              access to [describe the purpose of the API and its core features].
              Whether you're building a mobile app, a website, or any platform
              that requires seamless integration, our API is built to be fast,
              secure, and reliable.`}
            </p>
          </section>

          <section className="px-6 py-2">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              Your API Access Key
            </h2>
            {accessKey ? (
              <div className="bg-gray-200 p-4 rounded-lg flex justify-between">
                <strong>{accessKey}</strong>
                <button onClick={handleCopyAccessKey}>
                  {isCopyAccessKey ? (
                    <Check size={20} />
                  ) : (
                    <Clipboard size={20} />
                  )}
                </button>
              </div>
            ) : (
              <div className="bg-gray-200 p-4 rounded-lg">
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-darkPrimary"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>
            )}
          </section>

          <section className="px-6 py-2">
            <h2 className="text-2xl font-bold text-complementary mb-4">API Url</h2>
            <div className="bg-gray-200 p-4 rounded-lg flex justify-between">
              <strong>
                {" "}
                {selectedSidebarSubcategory?.api_url
                  ? `http://localhost:5000${selectedSidebarSubcategory?.api_url}`
                  : `https://www.example.com/`}
              </strong>
              <button onClick={handleCopyUrl}>
                {isCopyUrl ? <Check size={20} /> : <Clipboard size={20} />}
              </button>
            </div>
          </section>

          <section id="supported-api-types" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              Supported API Types
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The [API Name] supports the following HTTP methods for making
              requests:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>
                Example:{" "}
                <strong>
                  <code>{selectedSidebarSubcategory?.supported_api_types}</code>
                </strong>
              </li>
            </ul>
          </section>

          <section id="accepted-platforms" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              Accepted Platforms
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our API can be integrated across multiple platforms, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image src="/apple.png" alt="iOS" width={40} height={40} />
                <span className="text-sm text-gray-700">iOS</span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image
                  src="/android.png"
                  alt="Android"
                  width={40}
                  height={40}
                />
                <span className="text-sm text-gray-700">Android</span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image src="/chrome.png" alt="Chrome" width={40} height={40} />
                <span className="text-sm text-gray-700">Chrome</span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image
                  src="/firefox.png"
                  alt="Firefox"
                  width={40}
                  height={40}
                />
                <span className="text-sm text-gray-700">Firefox</span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image src="/safari.png" alt="Safari" width={40} height={40} />
                <span className="text-sm text-gray-700">Safari</span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-gray-700">
                <Image src="/microsoft.png" alt="Edge" width={40} height={40} />
                <span className="text-sm text-gray-700">Edge</span>
              </div>
            </div>
          </section>

          <section id="expected-body" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              Expected Body Content
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When making API requests, especially for <code>POST</code> and{" "}
              <code>PUT</code> methods, make sure to send the correct body
              content.
            </p>
            <h3 className="text-xl font-semibold text-complementary mb-2">
              Example JSON Payload
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
              <code>{selectedSidebarSubcategory?.expected_body_type}</code>
            </pre>
          </section>

          <section id="authentication" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-complementary mb-4">
              Authentication
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our API uses <strong>API Key</strong> authentication. Each
              registered user will be given a unique API key to include in their
              request headers.
            </p>
          </section>

          <section className="px-6 py-6">
            <div className="mt-6 bg-gray-800 p-6 rounded-lg relative">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-4">
                  <button
                    className={`${
                      selectedLanguage === "python"
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    } py-2 px-4 rounded-lg focus:outline-none`}
                    onClick={() => setSelectedLanguage("python")}
                  >
                    Python
                  </button>
                  <button
                    className={`${
                      selectedLanguage === "javascript"
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    } py-2 px-4 rounded-lg focus:outline-none`}
                    onClick={() => setSelectedLanguage("javascript")}
                  >
                    Node.js
                  </button>
                  <button
                    className={`${
                      selectedLanguage === "javascriptBrowser"
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    } py-2 px-4 rounded-lg focus:outline-none`}
                    onClick={() => setSelectedLanguage("javascriptBrowser")}
                  >
                    JavaScript (Browser)
                  </button>
                </div>
                <button className="text-white" onClick={handleCopy}>
                  {isCopied ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Clipboard className="w-6 h-6" />
                  )}
                </button>
              </div>
              <pre className="text-white overflow-x-auto">
                <code>{codeSnippets[selectedLanguage]}</code>
              </pre>
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  className="bg-primary text-white py-1 px-3 rounded-lg hover:bg-darkPrimary"
                  onClick={() =>
                    handleTryIt(selectedSidebarSubcategory?.api_url || "")
                  }
                >
                  Try It
                </button>
                <a
                  href="https://youtu.be/bxuYDT-BWaI?si=rfLGr3xr8A9jzZ4Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white py-1 px-3 rounded-lg hover:bg-darkPrimary"
                >
                  How to Use
                </a>
              </div>
            </div>
          </section>

          {showJson && (
            <div className="h-96 mt-6 mx-6 bg-gray-800 p-6 rounded-lg overflow-y-auto relative flex flex-col">
              <div className="flex justify-end sticky top-2">
                <button
                  className="text-white"
                  onClick={() => handleJSONCopy(JSONdata)}
                >
                  {" "}
                  {JSONCopied ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Clipboard className="w-6 h-6" />
                  )}
                </button>
                <button
                  className="bg-white px-4 py-2 rounded-lg ml-2"
                  onClick={() => handleFullResponse(JSONdata)}
                >
                  Full Response
                </button>
              </div>
              <pre className="text-white">
                {JSON.stringify(JSONdata, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Docs;
