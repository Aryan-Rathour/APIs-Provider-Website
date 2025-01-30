import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Clipboard, Check } from "lucide-react";
import dummyData from "../app/apis/DummyData/dummyData.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollToTop from "../components/ui/ScrollToTop.jsx";
import Sidebar from "@/components/ui/sidebar";

const Docs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [isCopied, setIsCopied] = useState(false);
  const [showJson, setShowJson] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("userEmail"); // Adjust as per your token storage
    if (!isAuthenticated) {
      router.push("/logIn"); // Redirect to login if not authenticated
    }
  }, []);

  const codeSnippets = {
    python: `import requests
url = 'https://api.example.com/data'
headers = {'Authorization': 'Bearer YOUR_API_KEY'}
response = requests.get(url, headers=headers)
print(response.json())`,
    javascript: `const fetch = require('node-fetch');
const url = 'https://api.example.com/data';
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
    javascriptBrowser: `fetch('https://api.example.com/data', {
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

  const handleCopy = () => {
    const codeSnippet = codeSnippets[selectedLanguage];
    if (codeSnippet) {
      navigator.clipboard
        .writeText(codeSnippet)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 8000);
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  if (!isClient) {
    return null;
  }

  const handleTryIt = () => {
    setShowJson(!showJson);
  };

  return (
    <div>
      <Navbar />
      <div className="fixed top-0 left-0 w-1/6 h-screen bg-gray-800 text-white">
        <Sidebar />
      </div>
      <ScrollToTop />
      <div className="flex pl-60 pt-4">
        <div className="flex-1 w-5/6 px-12">
          <header className="text-center py-4 px-4">
            <h1 className="text-4xl font-semibold text-purple-600 mb-4">
              API Documentation
            </h1>
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
              <li>
                <strong>POST</strong>: Used to send data to the server. Example:{" "}
                <code>POST /users</code>
              </li>
              <li>
                <strong>PUT</strong>: Used to update existing resources.
                Example: <code>PUT /users/id</code>
              </li>
              <li>
                <strong>DELETE</strong>: Used to delete a resource. Example:{" "}
                <code>DELETE /users/id</code>
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
            <div className="mt-6 bg-gray-800 p-6 rounded-lg">
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
            </div>
          </section>

          <button
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg mt-8 mx-auto block"
            onClick={handleTryIt}
          >
            Try It
          </button>

          {showJson && (
            <div className="mt-6 bg-gray-800 p-6 rounded-lg">
              <pre className="text-white">
                {JSON.stringify(dummyData, null, 2)}
              </pre>
            </div>
          )}

          <section className="px-6 py-12">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">
              Your API Access Key
            </h2>
            <div className="bg-gray-200 p-4 rounded-lg">
              <span className="font-semibold">API Key: </span>
              <strong>API-KEY-1234567890</strong>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs;
