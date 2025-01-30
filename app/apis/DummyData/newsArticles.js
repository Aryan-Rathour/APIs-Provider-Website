const newsArticle = [
    {
      "id": 1,
      "title": "Global Markets Rise Amid Economic Optimism",
      "author": "John Doe",
      "published_date": "2025-01-29T08:00:00Z",
      "content": "Global markets experienced a significant rally today as economic optimism spreads globally.",
      "category": "Economy",
      "source": "Global News Network"
    },
    {
      "id": 2,
      "title": "Breakthrough in Renewable Energy Technology",
      "author": "Jane Smith",
      "published_date": "2025-01-29T09:00:00Z",
      "content": "Scientists have announced a major breakthrough in renewable energy, promising to revolutionize the sector.",
      "category": "Technology",
      "source": "Tech Innovations"
    },
    {
      "id": 3,
      "title": "World Leaders Meet to Discuss Climate Change",
      "author": "Emily Green",
      "published_date": "2025-01-28T14:00:00Z",
      "content": "World leaders gathered today to discuss urgent measures to address the growing threat of climate change.",
      "category": "Politics",
      "source": "Environment Today"
    },
    {
      "id": 4,
      "title": "Sports Championship: Top Teams Battle for Victory",
      "author": "David Williams",
      "published_date": "2025-01-28T15:00:00Z",
      "content": "The national sports championship is heating up as top teams compete for the coveted title.",
      "category": "Sports",
      "source": "Sports Central"
    },
    {
      "id": 5,
      "title": "New Trends in Urban Architecture",
      "author": "Sarah Lee",
      "published_date": "2025-01-27T12:00:00Z",
      "content": "A new wave of innovative urban architecture is taking cities by storm, emphasizing sustainability and efficiency.",
      "category": "Lifestyle",
      "source": "Architecture Digest"
    },
    {
      "id": 6,
      "title": "Health Experts Warn Against Rising Obesity Rates",
      "author": "Mark Johnson",
      "published_date": "2025-01-27T13:00:00Z",
      "content": "Health experts are calling attention to the alarming rise in obesity rates, urging preventive measures.",
      "category": "Health",
      "source": "Health Journal"
    },
    {
      "id": 7,
      "title": "AI Revolution: How Artificial Intelligence Is Changing Industries",
      "author": "Anna White",
      "published_date": "2025-01-26T16:00:00Z",
      "content": "Artificial intelligence is revolutionizing various industries, from healthcare to finance, with its unprecedented capabilities.",
      "category": "Technology",
      "source": "Tech Innovations"
    },
    {
      "id": 8,
      "title": "Film Industry Faces Major Shift Amid Streaming Wars",
      "author": "Chris Brown",
      "published_date": "2025-01-26T17:00:00Z",
      "content": "The film industry is undergoing a transformation as streaming platforms compete for dominance in the entertainment space.",
      "category": "Entertainment",
      "source": "Cinema Weekly"
    },
    {
      "id": 9,
      "title": "Revolutionary Healthcare App Set to Change Patient Care",
      "author": "Olivia Black",
      "published_date": "2025-01-25T11:00:00Z",
      "content": "A new healthcare app is being hailed as a game-changer, offering innovative features for better patient care.",
      "category": "Health",
      "source": "Medical Review"
    },
    {
      "id": 10,
      "title": "Space Exploration: Mars Mission Gets Green Light",
      "author": "Tom Harris",
      "published_date": "2025-01-25T12:00:00Z",
      "content": "A new Mars mission has been approved, with ambitious plans to send astronauts to the Red Planet within the next decade.",
      "category": "Science",
      "source": "Space Frontier"
    },
    {
      "id": 11,
      "title": "New Fashion Trends for 2025",
      "author": "Linda Roberts",
      "published_date": "2025-01-24T18:00:00Z",
      "content": "The latest fashion trends for 2025 are all about bold colors, eco-friendly materials, and futuristic designs.",
      "category": "Fashion",
      "source": "Fashionista"
    },
    {
      "id": 12,
      "title": "Cryptocurrency Market Faces Regulatory Challenges",
      "author": "Carlos Fernandez",
      "published_date": "2025-01-24T19:00:00Z",
      "content": "The cryptocurrency market is facing significant regulatory challenges as governments move to impose stricter rules.",
      "category": "Finance",
      "source": "Crypto News"
    },
    {
      "id": 13,
      "title": "Social Media Platforms Address Misinformation",
      "author": "Rachel Adams",
      "published_date": "2025-01-23T09:00:00Z",
      "content": "Social media companies are taking action to combat misinformation with new fact-checking tools and stricter content policies.",
      "category": "Technology",
      "source": "Digital Trends"
    },
    {
      "id": 14,
      "title": "Exploring the Future of Autonomous Vehicles",
      "author": "James Miller",
      "published_date": "2025-01-23T10:00:00Z",
      "content": "Autonomous vehicles are poised to reshape transportation, offering benefits such as reduced traffic and increased safety.",
      "category": "Technology",
      "source": "Car Review"
    },
    {
      "id": 15,
      "title": "New Discoveries in Oceanic Research",
      "author": "Sophia Davis",
      "published_date": "2025-01-22T11:00:00Z",
      "content": "Researchers have made new discoveries in the depths of the ocean, unlocking secrets of marine ecosystems.",
      "category": "Science",
      "source": "Ocean Explorer"
    },
    {
      "id": 16,
      "title": "Stock Market Insights: What Investors Need to Know",
      "author": "Paul Green",
      "published_date": "2025-01-22T12:00:00Z",
      "content": "Investors are keeping a close eye on the stock market, with volatility expected to continue in the coming months.",
      "category": "Finance",
      "source": "Stock Watch"
    },
    {
      "id": 17,
      "title": "Technology Giants Join Forces on Sustainability Initiatives",
      "author": "Grace Turner",
      "published_date": "2025-01-21T14:00:00Z",
      "content": "Major technology companies are collaborating on sustainability initiatives, aiming to reduce carbon footprints and promote green innovation.",
      "category": "Technology",
      "source": "Tech World"
    },
    {
      "id": 18,
      "title": "The Future of Remote Work: Trends and Predictions",
      "author": "William Scott",
      "published_date": "2025-01-21T15:00:00Z",
      "content": "As remote work becomes more common, experts predict new trends that will shape the future of the workplace.",
      "category": "Business",
      "source": "Business Daily"
    },
    {
      "id": 19,
      "title": "New Regulations Aim to Protect Personal Data Online",
      "author": "Laura Wilson",
      "published_date": "2025-01-20T10:00:00Z",
      "content": "New regulations are being introduced to protect personal data online, ensuring greater privacy and security for users.",
      "category": "Technology",
      "source": "Data Privacy Watch"
    },
    {
      "id": 20,
      "title": "Global Hunger Crisis: Solutions and Challenges",
      "author": "Robert King",
      "published_date": "2025-01-20T11:00:00Z",
      "content": "The global hunger crisis remains a major challenge, with various organizations working to find sustainable solutions.",
      "category": "Humanitarian",
      "source": "World News"
    }
  ]

  export default newsArticle;
  