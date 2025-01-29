"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/pages/home"


export default function Home() {

  return (
    <div className="w-full bg-soft-white">
  <Navbar />
  <div className="container mx-auto px-8"> {/* Adjusted px-8 */}

    <HeroSection/>

    <section className="flex flex-wrap gap-4 md:gap-12 lg:gap-12 mb-16 justify-center">
      <Card className="w-96	bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg rounded-xl p-6">
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
        </CardContent>
      </Card>
      <Card className="w-96	bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg rounded-xl p-6">
        <CardHeader className="text-gray-900 font-semibold">
          <CardTitle>Latest Blog Posts</CardTitle>
          <CardDescription>Stay updated with our latest articles</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700">
          <ul className="list-disc pl-10">
            <li>How to Integrate APIs in Your Project</li>
            <li>Best Practices for API Usage</li>
            <li>Understanding API Rate Limits</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="w-96	bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg rounded-xl p-6">
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
        </CardContent>
      </Card>
    </section>
  </div>
  <Footer/>
</div>

  
  )
}

