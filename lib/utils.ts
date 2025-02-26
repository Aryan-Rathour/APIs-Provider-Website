import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const categories = [
  {
    name: "Random Data",
    subcategories: [
      {
        name: "Random User API",
        api_info: "Provides random user data including name, email, address, and profile picture.",
        api_url: "/random-user",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Random Quote API",
        api_info: "Fetches a random quote from a collection of famous quotes.",
        api_url: "/randomQuote",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Random Joke API",
        api_info: "Returns a random joke from various categories.",
        api_url: "/randomJoke",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "E-commerce",
    subcategories: [
      {
        name: "Products API",
        api_info: "Fetches a list of all available products.",
        api_url: "/randomProduct",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Social Media",
    subcategories: [
      {
        name: "Posts API",
        api_info: "Fetches a list of all social media posts.",
        api_url: "/posts",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Comments API",
        api_info: "Retrieves comments for a specific post.",
        api_url: "/post/:id/comments",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Create Post API",
        api_info: "Allows users to create a new post.",
        api_url: "/posts",
        supported_api_types: ["POST"],
        expected_body_type: `{
          "userId": 1,
          "title": "New Post",
          "body": "This is a new post"
        }`,
      },
    ],
  },
  {
    name: "Weather",
    subcategories: [
      {
        name: "Weather API",
        api_info: "Fetches current weather information based on the city name.",
        api_url: "/weather",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Finance",
    subcategories: [
      {
        name: "Stock API",
        api_info: "Provides stock market data for various companies.",
        api_url: "/stocks/:symbol",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Crypto Price API",
        api_info: "Fetches the latest cryptocurrency prices.",
        api_url: "/crypto-price?symbol=BTC",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Crypto Calculator",
        api_info: "Converts cryptocurrency amounts into different currencies.",
        api_url: "/crypto-convert?amount=1&from=BTC&to=USD",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "AI & NLP",
    subcategories: [
      {
        name: "Sentiment Analysis ",
        api_info: "Analyzes sentiment from a given text input.",
        api_url: "/sentiment?text=hello",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Text Summarization ",
        api_info: "Summarizes long text into a concise version.",
        api_url: "/summarize?text=long_text",
        supported_api_types: ["POST"],
        expected_body_type: `{
          "text": "This is a very long paragraph that needs summarization."
        }`,
      },
    ],
  },
  {
    name: "Security",
    subcategories: [
      {
        name: "IP Lookup API",
        api_info: "Provides information about an IP address, including location and ISP.",
        api_url: "/ip-info?ip=8.8.8.8",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Password Generator",
        api_info: "Generates a secure random password of the specified length.",
        api_url: "/generatePassword",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Gaming",
    subcategories: [
      {
        name: "Trivia Quiz API",
        api_info: "Fetches random trivia questions.",
        api_url: "/quiz",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Media",
    subcategories: [
      {
        name: "Image API",
        api_info: "Fetches a list of images related to a specific query.",
        api_url: "/images",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Song",
        api_info: "Fetches a list of Song related to a specific query.",
        api_url: "/song",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "AudioSong",
        api_info: "Fetches a list of AudioSong related to a specific query.",
        api_url: "/audioSong",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "VedioSong",
        api_info: "Fetches a list of VedioSong related to a specific query.",
        api_url: "/vedioSong",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Utilities",
    subcategories: [
      {
        name: "Basic Calculator API",
        api_info: "Performs basic arithmetic calculations.",
        api_url: "/calculate?expression=5*10",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "Scientific Calculator",
        api_info: "Evaluates scientific expressions like trigonometric functions.",
        api_url: "/scientific-calculate?expression=sin(30)",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "Country",
    subcategories: [
      {
        name: "Get All Countries",
        api_info: "Performs basic arithmetic calculations.",
        api_url: "/countries",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
  {
    name: "User",
    subcategories: [
      {
        name: "Get User Details",
        api_info: "Fetches userDetails.",
        api_url: "/userDetails",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
      {
        name: "User Fake Posts",
        api_info: "Fake User Post.",
        api_url: "/userPosts",
        supported_api_types: ["GET"],
        expected_body_type: "No request body required.",
      },
    ],
  },
];
