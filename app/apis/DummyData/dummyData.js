const dummyData = [
    {
      results: [
        {
          gender: "male",
          name: { title: "Mr", first: "John", last: "Doe" },
          location: {
            street: { number: 123, name: "Main St" },
            city: "Anytown",
            state: "Anystate",
            country: "USA",
            postcode: 12345,
            coordinates: { latitude: "0.0000", longitude: "0.0000" },
            timezone: { offset: "+0:00", description: "UTC" },
          },
          email: "john.doe@example.com",
          login: { uuid: "uuid", username: "johndoe", password: "password" },
          dob: { date: "1990-01-01T00:00:00Z", age: 31 },
          registered: { date: "2020-01-01T00:00:00Z", age: 1 },
          phone: "123-456-7890",
          cell: "098-765-4321",
          id: { name: "SSN", value: "123-45-6789" },
          picture: { large: "url", medium: "url", thumbnail: "url" },
          nat: "US",
        },
      ],
      info: { seed: "seed", results: 1, page: 1, version: "1.0" },
    },
  ];

  export default dummyData;