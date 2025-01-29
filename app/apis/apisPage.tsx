"use client"

import { useState } from "react"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const apis = [
  { name: "Random User API", category: "User Data", description: "Generate random user profiles" },
  { name: "Weather API", category: "Weather", description: "Get current weather and forecasts" },
  { name: "Cat Facts API", category: "Animals", description: "Retrieve random facts about cats" },
  {
    name: "Movie Database API",
    category: "Entertainment",
    description: "Access information about movies and TV shows",
  },
  { name: "Currency Exchange API", category: "Finance", description: "Get real-time currency exchange rates" },
  { name: "Trivia API", category: "Games", description: "Fetch random trivia questions and answers" },
]

export default function APIsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredApis = apis.filter(
    (api) =>
      (api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        api.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || api.category === selectedCategory),
  )

  const categories = ["All", ...new Set(apis.map((api) => api.category))]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Our APIs</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="search"
          placeholder="Search APIs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApis.map((api) => (
          <Card key={api.name}>
            <CardHeader>
              <CardTitle>{api.name}</CardTitle>
              <CardDescription>{api.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{api.description}</p>
              <Button>View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

