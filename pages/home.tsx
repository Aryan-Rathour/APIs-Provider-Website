"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import Login from './logIn';
import SignUp from './signUp';
import Sidebar from '@/components/ui/sidebar';

export default function HeroSection() {

      const [showSignUp, setShowSignUp] = useState(false);
      const [modalPosition, setModalPosition] = useState("top-right"); // default position

    
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 bg-white">
      <div className='z-index'>

      <Sidebar/>

      </div>
      <div className="max-w-4xl">
        {/* Heading with better hierarchy and spacing */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#06092D] py-6 leading-tight">
          Pioneering, <br />
          <span className='text-red-500 typewriting'>Your Gateway to Seamless <br/>API Connectivity.</span>
        </h1>

        {/* Subheading with a more readable font size and weight */}
        <p className="my-4 text-gray-700 text-xl font-medium">
          Your Best Revolutioner API Provider awaits you!
        </p>

        {/* Body text with improved line spacing and contrast */}
        <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">
          Discover as we bring in groundbreaking API solutions tailored to your
          business needs.
        </p>

        {/* Button section with spacing and alignment */}
        <div className="mt-10 md:mt-16 flex gap-6 justify-start">
          <button
                onClick={() => setShowSignUp(true)}
                className="bg-red-600 text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition"
              >
                Sign up
              </button>

          <Link href="/documentation" className="border border-red-600 text-red-500 px-10 py-2 rounded-full text-lg font-semibold hover:border-red-700 hover:text-red-700 transition">
            View Documentation
          </Link>
        </div>
      </div>

      {/* Image section with proper margin on smaller screens */}
      <div className="relative mt-10 md:mt-0 md:ml-8">
        <Image
          src="/banner-img.png"
          alt="Banking Tech Illustration"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {showSignUp && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
                <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                  {/* Close Button */}
                  <button
                    onClick={() => setShowSignUp(false)}
                    className={`absolute ${modalPosition === "top-right" ? "bottom-56 right-4" : "bottom-80 right-80"} text-gray-600 hover:text-gray-900 text-xl font-bold z-50`}
                    >
                    ✕
                  </button>
                  <div className="mt-4">
                    <SignUp />
                  </div>
                </div>
              </div>
            )}
    </section>
  );
}
