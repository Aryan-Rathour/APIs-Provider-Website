import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>Empowering developers with free, reliable APIs</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Free Random APIs Platform, we believe in making data accessible to everyone. Our mission is to provide
            developers with a wide range of free, high-quality APIs that can be easily integrated into their projects.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
          <CardDescription>Meet the people behind the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our team consists of passionate developers and data enthusiasts who are committed to creating and
            maintaining a robust API ecosystem. We work tirelessly to ensure our APIs are reliable, up-to-date, and easy
            to use.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have any questions, suggestions, or need assistance, our support team is here to help. Feel free to
            reach out to us anytime.
          </p>
          <Button>Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  )
}

