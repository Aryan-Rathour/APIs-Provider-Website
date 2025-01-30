const weather = [
    {
      "city": "New York",
      "temperature": 15,
      "humidity": 60,
      "weather": "Clear",
      "wind_speed": 5.4,
      "wind_direction": "N",
      "pressure": 1013,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Los Angeles",
      "temperature": 22,
      "humidity": 45,
      "weather": "Sunny",
      "wind_speed": 7.2,
      "wind_direction": "W",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Chicago",
      "temperature": -5,
      "humidity": 80,
      "weather": "Snow",
      "wind_speed": 12.5,
      "wind_direction": "E",
      "pressure": 1010,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Houston",
      "temperature": 18,
      "humidity": 85,
      "weather": "Rainy",
      "wind_speed": 9.1,
      "wind_direction": "S",
      "pressure": 1014,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Phoenix",
      "temperature": 30,
      "humidity": 20,
      "weather": "Sunny",
      "wind_speed": 3.2,
      "wind_direction": "N",
      "pressure": 1011,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Philadelphia",
      "temperature": 10,
      "humidity": 65,
      "weather": "Cloudy",
      "wind_speed": 4.5,
      "wind_direction": "NW",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "San Antonio",
      "temperature": 21,
      "humidity": 50,
      "weather": "Clear",
      "wind_speed": 6.3,
      "wind_direction": "SW",
      "pressure": 1013,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "San Diego",
      "temperature": 19,
      "humidity": 70,
      "weather": "Partly Cloudy",
      "wind_speed": 5.0,
      "wind_direction": "SSE",
      "pressure": 1014,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Dallas",
      "temperature": 25,
      "humidity": 50,
      "weather": "Sunny",
      "wind_speed": 4.7,
      "wind_direction": "E",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "San Jose",
      "temperature": 24,
      "humidity": 30,
      "weather": "Clear",
      "wind_speed": 2.8,
      "wind_direction": "WNW",
      "pressure": 1015,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Austin",
      "temperature": 20,
      "humidity": 60,
      "weather": "Partly Cloudy",
      "wind_speed": 7.8,
      "wind_direction": "S",
      "pressure": 1011,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Jacksonville",
      "temperature": 17,
      "humidity": 75,
      "weather": "Rainy",
      "wind_speed": 5.9,
      "wind_direction": "SE",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Fort Worth",
      "temperature": 23,
      "humidity": 40,
      "weather": "Clear",
      "wind_speed": 8.1,
      "wind_direction": "NE",
      "pressure": 1013,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Columbus",
      "temperature": -2,
      "humidity": 85,
      "weather": "Snow",
      "wind_speed": 6.6,
      "wind_direction": "NW",
      "pressure": 1010,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Charlotte",
      "temperature": 16,
      "humidity": 50,
      "weather": "Cloudy",
      "wind_speed": 4.9,
      "wind_direction": "S",
      "pressure": 1014,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "San Francisco",
      "temperature": 14,
      "humidity": 65,
      "weather": "Foggy",
      "wind_speed": 3.4,
      "wind_direction": "SW",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Indianapolis",
      "temperature": 5,
      "humidity": 70,
      "weather": "Rainy",
      "wind_speed": 10.2,
      "wind_direction": "S",
      "pressure": 1013,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Seattle",
      "temperature": 11,
      "humidity": 80,
      "weather": "Rainy",
      "wind_speed": 5.1,
      "wind_direction": "N",
      "pressure": 1010,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Denver",
      "temperature": -4,
      "humidity": 55,
      "weather": "Snow",
      "wind_speed": 7.3,
      "wind_direction": "E",
      "pressure": 1011,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Washington DC",
      "temperature": 12,
      "humidity": 65,
      "weather": "Cloudy",
      "wind_speed": 3.8,
      "wind_direction": "SSE",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Boston",
      "temperature": 9,
      "humidity": 72,
      "weather": "Clear",
      "wind_speed": 4.2,
      "wind_direction": "NNE",
      "pressure": 1015,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Detroit",
      "temperature": -6,
      "humidity": 78,
      "weather": "Snow",
      "wind_speed": 11.1,
      "wind_direction": "NE",
      "pressure": 1010,
      "timestamp": "2025-01-29T12:00:00Z"
    },
    {
      "city": "Memphis",
      "temperature": 17,
      "humidity": 80,
      "weather": "Rainy",
      "wind_speed": 6.7,
      "wind_direction": "SW",
      "pressure": 1012,
      "timestamp": "2025-01-29T12:00:00Z"
    }
  ]

exports default weather;