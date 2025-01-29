"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function Home() {

  return (
    <div className="w-full bg-soft-white">
  <Navbar />
  <div className="container mx-auto px-8 py-8"> {/* Adjusted px-8 */}
    <section className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Free Random APIs Platform</h1>
      <p className="text-xl mb-8 text-amber-900">Explore and integrate random APIs with ease</p>
      <Button asChild size="lg">
        <Link href="/apis">Explore APIs</Link>
      </Button>
    </section>

    <section className="flex flex-wrap gap-4 md:gap-12 lg:gap-12 mb-16 justify-center">
      <Card className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
        <CardHeader className="bg-blue-500 rounded-t-lg">
          <CardTitle>Popular APIs</CardTitle>
          <CardDescription>Discover our most used APIs</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <ul className="list-disc">
            <li>Random User Generator</li>
            <li>Weather Forecast</li>
            <li>Currency Exchange Rates</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden ">
        <CardHeader className="bg-blue-500 rounded-t-lg">
          <CardTitle>Latest Blog Posts</CardTitle>
          <CardDescription>Stay updated with our latest articles</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <ul className="list-disc pl-5">
            <li>How to Integrate APIs in Your Project</li>
            <li>Best Practices for API Usage</li>
            <li>Understanding API Rate Limits</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
        <CardHeader className="bg-blue-500 rounded-t-lg">
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Learn how to use our APIs</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <ul className="list-disc">
            <li>Getting Started Guide</li>
            <li>API Reference</li>
            <li>Code Examples</li>
          </ul>
        </CardContent>
      </Card>
    </section>

    <section className="text-center">
      <h2 className="text-2xl font-bold m-3">Ready to get started?</h2>
      <Button asChild size="lg" className="mb-4">
        <Link href="/signup">Sign Up Now</Link>
      </Button>
    </section>
  </div>
  <Footer/>
</div>

  
  )
}

