"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/pages/home";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
          <div className="perspective-1000">
            <div className="relative w-96 h-80 transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
              {/* Front side */}
              <div className="absolute  w-full h-full bg-purple-500  flex items-center justify-center backface-hidden rounded-lg border border-gray-200 shadow-md">
                <h2 className="text-white text-xl font-semibold">
                  Popular API
                </h2>
              </div>

              {/* Back side */}
              <div className="rounded-lg absolute w-full h-full bg-gray-50  flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
                <h3 className="text-xl text-purple-500 font-semibold mb-2 p-6">
                  Discover our most used APIs
                </h3>
                <ul className="list-disc text-center pl-10">
                  <li>Random User Generator</li>
                  <li>Weather Forecast</li>
                  <li>Currency Exchange Rates</li>
                </ul>
                <button className="px-4 py-2 mt-8 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-100 transition flex items-center gap-2">
                  Learn more <span className="p-1">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="perspective-1000">
            <div className="relative w-96 h-80 transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
              {/* Front side */}
              <div className="absolute w-full h-full bg-purple-500  flex items-center justify-center backface-hidden rounded-lg border border-gray-200 shadow-md">
                <h2 className="text-white text-xl font-semibold">
                  Latest Blog Posts
                </h2>
              </div>

              {/* Back side */}
              <div className="rounded-lg absolute w-full h-full bg-gray-50 flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
                <h3 className="text-purple-500 text-xl font-semibold mb-2 p-6">
                  Stay updated with our latest articles
                </h3>
                <ul className="list-disc text-center pl-10">
                  <li>How to Integrate APIs in Your Project</li>
                  <li>Best Practices for API Usage</li>
                  <li>Understanding API Rate Limits</li>
                </ul>
                <button className="px-4 py-2 mt-8 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-100 transition flex items-center gap-2">
                  Learn more <span className="p-1">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-96 h-80 transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
            <div className="absolute w-full h-full bg-purple-500  flex items-center justify-center backface-hidden rounded-lg border border-gray-200 shadow-md">
              <h2 className="text-white text-xl font-semibold">
                Documentation
              </h2>
            </div>

            <div className="rounded-lg absolute w-full h-full bg-gray-50 flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
              <h3 className="text-purple-500 text-xl font-semibold mb-2 p-2">
                Learn how to use our APIs
              </h3>
              <ul className="list-disc text-center pl-10">
                <li>Getting Started Guide</li>
                <li>API Reference</li>
                <li>Code Examples</li>
              </ul>
              <button className="px-4 py-2 mt-8 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-100 transition flex items-center gap-2">
                Learn more <span className="p-1">&rarr;</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
