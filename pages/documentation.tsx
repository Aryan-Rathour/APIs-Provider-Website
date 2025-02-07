import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Clipboard, Check } from "lucide-react";
import dummyData from "../app/apis/DummyData/dummyData.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import Sidebar from "@/components/ui/sidebar";
import sidebarData from "../app/apis/DummyData/sidebarDummy.js";
import useFetchData from "@/app/services/getApi.js";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Docs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [isCopied, setIsCopied] = useState(false);
  const [showJson, setShowJson] = useState(false);
  const [JSONCopied, setIsJSONCopied] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [isCopyUrl, setIsCopyUrl] = useState(false);
  const [isCopyAccessKey, setIsCopyAccessKey] = useState(false);
  const [subcategory, setSubcategory] = useState({});
  const [apiName, setApiName] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();

  const { url } = subcategory;

  const codeSnippets = {
    python: `import requests
url = "${
      selectedSubcategory || url
        ? selectedSubcategory || url
        : "https://www.example.com/"
    }"
headers = {'Authorization': 'Bearer YOUR_API_KEY'}
response = requests.get(url, headers=headers)
print(response.json())`,
    javascript: `const fetch = require('node-fetch');
const url = "${
      selectedSubcategory || url
        ? selectedSubcategory || url
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
      selectedSubcategory || url
        ? selectedSubcategory || url
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

  // Conditionally fetch data when the button is clicked
  const { data, error, isLoading } = useFetchData(
    "http://localhost:5000/randomJoke?result=4"
  );

  const handleClick = () => {
    setIsClicked(true); // Set state to true when the button is clicked
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

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
    navigator.clipboard.writeText(selectedUrl || "https://www.example.com/");
    setIsCopyUrl(true);
    setTimeout(() => setIsCopyUrl(false), 2000);
  };

  const handleCopyAccessKey = () => {
    navigator.clipboard.writeText("1234567890");
    setIsCopyAccessKey(true);
    setTimeout(() => setIsCopyAccessKey(false), 2000);
  };

  const handleJSONCopy = () => {
    const jsonData = JSON.stringify(dummyData, null, 2); // Convert JSON data to a formatted string
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

  const handleTryIt = () => {
    setShowJson(!showJson);
  };

  const handleFullResponse = () => {
    const jsonData = JSON.stringify(dummyData, null, 2); // Convert dummyData to JSON string
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank"); // Open JSON in a new tab
  };

  const handleSubcategoryClick = (subcategory, name) => {
    setSubcategory(subcategory);
    setApiName(name);
  };

  const handleShowSubcategoryClick = (url) => {
    console.log("Selected subcategory URL:", url);
    setSelectedSubcategory(url);
  };

  return (
    <div>
      <Navbar handleSubcategoryClick={handleSubcategoryClick} />
      <div className="fixed top-0 left-0 w-1/6 h-screen bg-gray-800 text-white overflow-y-auto">
        <Sidebar
          subcategory={subcategory}
          apiName={apiName}
          onSubcategoryClick={handleShowSubcategoryClick}
        />
      </div>
      <ScrollToTop />
      <div className="flex pl-60 pt-4">
        <div className="flex-1 w-5/6 px-12">
          <header className="text-center py-4 px-4">
            <h1
              className=" text-4xl font-semibold text-purple-600 mb-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              API Documentation
            </h1>
            <button className="bg-white px-4 py-4 border-2 border-red-500 rounded-lg" onClick={handleClick}>
              random jokes
            </button>
            <div className="flex justify-center items-center">
            {isClicked && data && (
                <Card className="w-96 bg-gray-50 border border-gray-200 shadow-md rounded-xl p-6 custom-hover-border ">
                <CardHeader className="text-gray-900 font-semibold">
                  <CardTitle>Random jokes</CardTitle>
                  <CardDescription>your random jokes</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-700">
                  {isClicked && data && (
                    <div>
                      <ul>
                        {data.map((joke, index) => (
                          <li key={index}>{joke.joke}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>


            )}
            </div>
            
            

            <p className="text-lg text-gray-600">
              Welcome to the API documentation page. Below you will find code
              examples, animations, and your API access key.
            </p>
          </header>

          <section id="api-information" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              API Information
            </h2>
            <p className="text-lg text-gray-700">
              Welcome to the [API Name] documentation. Our API allows you to
              integrate powerful features into your applications, providing
              access to [describe the purpose of the API and its core features].
              Whether you're building a mobile app, a website, or any platform
              that requires seamless integration, our API is built to be fast,
              secure, and reliable.
            </p>
          </section>

          <section className="px-6 py-2">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              {localStorage.getItem("userEmail")
                ? "Your API Access Key"
                : "Login to Get Your API Key"}
            </h2>
            {localStorage.getItem("userEmail") ? (
              <div className="bg-gray-200 p-4 rounded-lg flex justify-between">
                <strong>Access Key: 1234567890</strong>
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
                  onClick={() => router.push("/logIn")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Login
                </button>
              </div>
            )}
          </section>

          <section className="px-6 py-2">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">API Url</h2>
            <div className="bg-gray-200 p-4 rounded-lg flex justify-between">
              <strong>
                {" "}
                url =
                {selectedSubcategory || url
                  ? selectedSubcategory || url
                  : "https://www.example.com/"}
              </strong>
              <button onClick={handleCopyUrl}>
                {isCopyUrl ? <Check size={20} /> : <Clipboard size={20} />}
              </button>
            </div>
          </section>

          <section id="supported-api-types" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Supported API Types
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The [API Name] supports the following HTTP methods for making
              requests:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>
                <strong>GET</strong>: Used to retrieve data from the server.
                Example: <code>GET /users</code>
              </li>
            </ul>
          </section>

          <section id="accepted-platforms" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
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
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Expected Body Content
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When making API requests, especially for <code>POST</code> and{" "}
              <code>PUT</code> methods, make sure to send the correct body
              content.
            </p>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Example JSON Payload
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
              <code>{`{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}`}</code>
            </pre>
          </section>

          <section id="authentication" className="px-6 py-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
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
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    } py-2 px-4 rounded-lg focus:outline-none`}
                    onClick={() => setSelectedLanguage("python")}
                  >
                    Python
                  </button>
                  <button
                    className={`${
                      selectedLanguage === "javascript"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    } py-2 px-4 rounded-lg focus:outline-none`}
                    onClick={() => setSelectedLanguage("javascript")}
                  >
                    Node.js
                  </button>
                  <button
                    className={`${
                      selectedLanguage === "javascriptBrowser"
                        ? "bg-indigo-600 text-white"
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
                  className="bg-indigo-600 text-white py-1 px-3 rounded-lg"
                  onClick={handleTryIt}
                >
                  Try It
                </button>
                <a
                  href="https://youtu.be/bxuYDT-BWaI?si=rfLGr3xr8A9jzZ4Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-1 px-3 rounded-lg"
                >
                  How to Use
                </a>
              </div>
            </div>
          </section>

          {showJson && (
            <div className="h-96 mt-6 bg-gray-800 p-6 rounded-lg overflow-y-auto relative flex flex-col">
              <div className="flex justify-end sticky top-2">
                <button className="text-white" onClick={handleJSONCopy}>
                  {" "}
                  {JSONCopied ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Clipboard className="w-6 h-6" />
                  )}
                </button>
                <button
                  className="bg-white px-4 py-2 rounded-lg ml-2"
                  onClick={handleFullResponse}
                >
                  Full Response
                </button>
              </div>
              <pre className="text-white">
                {JSON.stringify(dummyData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Docs;
