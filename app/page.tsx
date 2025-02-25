"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/pages/home";
import ScrollToTop from "@/components/ui/ScrollToTop";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full bg-soft-white">
      <ScrollToTop />
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="container mx-auto px-8">
        {" "}
        {/* Adjusted px-8 */}
        <HeroSection />
        <section className="flex flex-wrap gap-4 md:gap-12 lg:gap-12 mb-16 justify-center">
          <Card className="w-96 bg-gray-50 border border-gray-200 shadow-md rounded-xl p-6 custom-hover-border">
            <CardHeader className="text-gray-900 font-semibold">
              <CardTitle>Popular APIs</CardTitle>
              <CardDescription>Discover our most used APIs</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc pl-10">
                <li>Random User Generator</li>
                <li>Weather Forecast</li>
                <li>Currency Exchange Rates</li>
              </ul>
              <button className="flex items-center px-4 py-2 mt-8 ml-16 border border-purple-500 text-purple-500 hover:bg-gray-100 hover:border-gray-700 rounded-lg transition duration-300">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </CardContent>
          </Card>

          <Card className="w-96 bg-gray-50 border border-gray-200 shadow-md rounded-xl p-6 custom-hover-border">
            <CardHeader className="text-gray-900 font-semibold">
              <CardTitle>Latest Blog Posts</CardTitle>
              <CardDescription>
                Stay updated with our latest articles
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc pl-10">
                <li>How to Integrate APIs in Your</li>
                <li>Best Practices for API Usage</li>
                <li>Understanding API Rate Limits</li>
              </ul>
              <button className="flex items-center px-4 py-2 mt-8 ml-16 border border-purple-500 text-purple-500 hover:bg-gray-100 hover:border-gray-700 rounded-lg transition duration-300">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </CardContent>
          </Card>
          <Card className="w-96 bg-gray-50 border border-gray-200 shadow-md rounded-xl p-6 custom-hover-border">
            <CardHeader className="text-gray-900 font-semibold">
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Learn how to use our APIs</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc pl-10">
                <li>Getting Started Guide</li>
                <li>API Reference</li>
                <li>Code Examples</li>
              </ul>
              <button className="flex items-center px-4 py-2 mt-8 ml-16 border border-purple-500 text-purple-500 hover:bg-gray-100 hover:border-gray-700 rounded-lg transition duration-300">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
