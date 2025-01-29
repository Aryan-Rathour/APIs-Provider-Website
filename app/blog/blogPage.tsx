import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Random User API",
    description: "Learn how to integrate and use the Random User API in your projects",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Best Practices for API Usage",
    description: "Discover the best practices for efficient and effective API usage",
    date: "2023-05-22",
  },
  {
    id: 3,
    title: "New Features: Weather API Integration",
    description: "Explore the newly added Weather API and its capabilities",
    date: "2023-05-29",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>Posted on {post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.description}</p>
              <Link href={`/blog/${post.id}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

