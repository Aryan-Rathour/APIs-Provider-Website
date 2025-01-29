"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const languages = ["JavaScript", "Python", "Ruby"]

const codeExamples = {
  JavaScript: `
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  `,
  Python: `
import requests

response = requests.get('https://api.example.com/data')
data = response.json()
print(data)
  `,
  Ruby: `
require 'net/http'
require 'json'

uri = URI('https://api.example.com/data')
response = Net::HTTP.get(uri)
data = JSON.parse(response)
puts data
  `,
}

export default function DocsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn how to use our APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              To use our APIs, you&apos;ll need to sign up for an account and obtain an API key. Once you have your API key,
              you can start making requests to our endpoints.
            </p>
            <Button>Sign Up for an API Key</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>Sample code for different programming languages</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <TabsList>
                {languages.map((lang) => (
                  <TabsTrigger key={lang} value={lang}>
                    {lang}
                  </TabsTrigger>
                ))}
              </TabsList>
              {languages.map((lang) => (
                <TabsContent key={lang} value={lang}>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{codeExamples[lang]}</code>
                  </pre>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Detailed information about our API endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For detailed information about our API endpoints, request/response formats, and authentication, please
              refer to our full API reference documentation.
            </p>
            <Button>View Full API Reference</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

