const randomUser = [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "johndoe@example.com",
      "gender": "male",
      "address": "123 Elm St, Springfield, IL",
      "phone": "+1 555-1234",
      "date_of_birth": "1985-05-15"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "janesmith@example.com",
      "gender": "female",
      "address": "456 Oak Ave, Chicago, IL",
      "phone": "+1 555-5678",
      "date_of_birth": "1990-09-22"
    },
    {
      "id": 3,
      "first_name": "Bob",
      "last_name": "Johnson",
      "email": "bobjohnson@example.com",
      "gender": "male",
      "address": "789 Pine Rd, Springfield, IL",
      "phone": "+1 555-6789",
      "date_of_birth": "1978-02-20"
    },
    {
      "id": 4,
      "first_name": "Alice",
      "last_name": "Williams",
      "email": "alicewilliams@example.com",
      "gender": "female",
      "address": "101 Maple St, Peoria, IL",
      "phone": "+1 555-2345",
      "date_of_birth": "1982-11-13"
    },
    {
      "id": 5,
      "first_name": "Charlie",
      "last_name": "Brown",
      "email": "charliebrown@example.com",
      "gender": "male",
      "address": "202 Birch Blvd, Decatur, IL",
      "phone": "+1 555-3456",
      "date_of_birth": "1995-03-25"
    },
    {
      "id": 6,
      "first_name": "David",
      "last_name": "Davis",
      "email": "daviddavis@example.com",
      "gender": "male",
      "address": "303 Cedar St, Bloomington, IL",
      "phone": "+1 555-4567",
      "date_of_birth": "1988-07-14"
    },
    {
      "id": 7,
      "first_name": "Eva",
      "last_name": "Miller",
      "email": "evamiller@example.com",
      "gender": "female",
      "address": "404 Willow Way, Carbondale, IL",
      "phone": "+1 555-5670",
      "date_of_birth": "1993-04-02"
    },
    {
      "id": 8,
      "first_name": "Frank",
      "last_name": "Moore",
      "email": "frankmoore@example.com",
      "gender": "male",
      "address": "505 Pine Blvd, Champaign, IL",
      "phone": "+1 555-6781",
      "date_of_birth": "1980-01-30"
    },
    {
      "id": 9,
      "first_name": "Grace",
      "last_name": "Taylor",
      "email": "gracetaylor@example.com",
      "gender": "female",
      "address": "606 Oak St, Urbana, IL",
      "phone": "+1 555-7892",
      "date_of_birth": "1992-06-17"
    },
    {
      "id": 10,
      "first_name": "Henry",
      "last_name": "Anderson",
      "email": "henryanderson@example.com",
      "gender": "male",
      "address": "707 Maple Ave, Springfield, IL",
      "phone": "+1 555-8901",
      "date_of_birth": "1975-10-05"
    },
    {
      "id": 11,
      "first_name": "Isabel",
      "last_name": "Harris",
      "email": "isabelharris@example.com",
      "gender": "female",
      "address": "808 Cedar Rd, St. Louis, MO",
      "phone": "+1 555-9012",
      "date_of_birth": "1987-08-11"
    },
    {
      "id": 12,
      "first_name": "James",
      "last_name": "Clark",
      "email": "jamesclark@example.com",
      "gender": "male",
      "address": "909 Birch Blvd, Kansas City, MO",
      "phone": "+1 555-0123",
      "date_of_birth": "1984-12-25"
    },
    {
      "id": 13,
      "first_name": "Kelly",
      "last_name": "Lewis",
      "email": "kellylewis@example.com",
      "gender": "female",
      "address": "1010 Elm Rd, Madison, WI",
      "phone": "+1 555-1234",
      "date_of_birth": "1990-01-12"
    },
    {
      "id": 14,
      "first_name": "Liam",
      "last_name": "Walker",
      "email": "liamwalker@example.com",
      "gender": "male",
      "address": "1111 Oak Blvd, Milwaukee, WI",
      "phone": "+1 555-2345",
      "date_of_birth": "1993-04-10"
    },
    {
      "id": 15,
      "first_name": "Megan",
      "last_name": "Young",
      "email": "meganyoung@example.com",
      "gender": "female",
      "address": "1212 Pine St, Detroit, MI",
      "phone": "+1 555-3456",
      "date_of_birth": "1986-03-05"
    },
    {
      "id": 16,
      "first_name": "Nathan",
      "last_name": "King",
      "email": "nathanking@example.com",
      "gender": "male",
      "address": "1313 Cedar Ave, Omaha, NE",
      "phone": "+1 555-4567",
      "date_of_birth": "1992-02-20"
    },
    {
      "id": 17,
      "first_name": "Olivia",
      "last_name": "Scott",
      "email": "oliviascott@example.com",
      "gender": "female",
      "address": "1414 Birch St, Lincoln, NE",
      "phone": "+1 555-5678",
      "date_of_birth": "1995-09-11"
    },
    {
      "id": 18,
      "first_name": "Paul",
      "last_name": "Adams",
      "email": "pauladams@example.com",
      "gender": "male",
      "address": "1515 Oak Rd, St. Louis, MO",
      "phone": "+1 555-6789",
      "date_of_birth": "1981-12-07"
    },
    {
      "id": 19,
      "first_name": "Quinn",
      "last_name": "Baker",
      "email": "quinnbaker@example.com",
      "gender": "female",
      "address": "1616 Maple Blvd, Madison, WI",
      "phone": "+1 555-7890",
      "date_of_birth": "1990-05-18"
    },
    {
      "id": 20,
      "first_name": "Ryan",
      "last_name": "Nelson",
      "email": "ryannelson@example.com",
      "gender": "male",
      "address": "1717 Pine Ave, Des Moines, IA",
      "phone": "+1 555-8901",
      "date_of_birth": "1994-10-22"
    },
    {
      "id": 21,
      "first_name": "Sophia",
      "last_name": "Carter",
      "email": "sophiacarter@example.com",
      "gender": "female",
      "address": "1818 Cedar Blvd, Columbus, OH",
      "phone": "+1 555-9012",
      "date_of_birth": "1988-07-30"
    },
    {
      "id": 22,
      "first_name": "Tom",
      "last_name": "Mitchell",
      "email": "tommitchell@example.com",
      "gender": "male",
      "address": "1919 Birch Rd, Cleveland, OH",
      "phone": "+1 555-0123",
      "date_of_birth": "1991-03-03"
    },
    {
      "id": 23,
      "first_name": "Uma",
      "last_name": "Perez",
      "email": "umaperez@example.com",
      "gender": "female",
      "address": "2020 Maple St, Toledo, OH",
      "phone": "+1 555-1234",
      "date_of_birth": "1996-01-09"
    },
    {
      "id": 24,
      "first_name": "Victor",
      "last_name": "Roberts",
      "email": "victorroberts@example.com",
      "gender": "male",
      "address": "2121 Cedar Rd, Indianapolis, IN",
      "phone": "+1 555-2345",
      "date_of_birth": "1984-04-16"
    },
    {
      "id": 25,
      "first_name": "Wendy",
      "last_name": "Morris",
      "email": "wendymorris@example.com",
      "gender": "female",
      "address": "2222 Oak St, Louisville, KY",
      "phone": "+1 555-3456",
      "date_of_birth": "1992-02-03"
    },
    {
      "id": 26,
      "first_name": "Xander",
      "last_name": "Garcia",
      "email": "xandergarcia@example.com",
      "gender": "male",
      "address": "2323 Birch Ave, Raleigh, NC",
      "phone": "+1 555-4567",
      "date_of_birth": "1983-11-18"
    },
    {
      "id": 27,
      "first_name": "Yasmine",
      "last_name": "Rodriguez",
      "email": "yasminerodriguez@example.com",
      "gender": "female",
      "address": "2424 Maple Ave, Austin, TX",
      "phone": "+1 555-5678",
      "date_of_birth": "1994-06-27"
    },
    {
      "id": 28,
      "first_name": "Zane",
      "last_name": "Lee",
      "email": "zanelee@example.com",
      "gender": "male",
      "address": "2525 Cedar Blvd, Houston, TX",
      "phone": "+1 555-6789",
      "date_of_birth": "1989-07-22"
    },
    {
      "id": 29,
      "first_name": "Adam",
      "last_name": "Gonzalez",
      "email": "adamgonzalez@example.com",
      "gender": "male",
      "address": "2626 Oak St, Dallas, TX",
      "phone": "+1 555-7890",
      "date_of_birth": "1991-08-17"
    },
    {
      "id": 30,
      "first_name": "Bella",
      "last_name": "Martinez",
      "email": "bellamartinez@example.com",
      "gender": "female",
      "address": "2727 Birch Rd, San Antonio, TX",
      "phone": "+1 555-8901",
      "date_of_birth": "1985-03-02"
    },
    {
      "id": 31,
      "first_name": "Carlos",
      "last_name": "Hernandez",
      "email": "carloshernandez@example.com",
      "gender": "male",
      "address": "2828 Maple Blvd, Phoenix, AZ",
      "phone": "+1 555-9012",
      "date_of_birth": "1980-12-30"
    },
    {
      "id": 32,
      "first_name": "Diana",
      "last_name": "Lopez",
      "email": "dianalopez@example.com",
      "gender": "female",
      "address": "2929 Cedar St, Tucson, AZ",
      "phone": "+1 555-0123",
      "date_of_birth": "1993-09-08"
    },
    {
      "id": 33,
      "first_name": "Ethan",
      "last_name": "Wilson",
      "email": "ethanwilson@example.com",
      "gender": "male",
      "address": "3030 Birch Blvd, Albuquerque, NM",
      "phone": "+1 555-1234",
      "date_of_birth": "1990-06-01"
    },
    {
      "id": 34,
      "first_name": "Faith",
      "last_name": "King",
      "email": "faithking@example.com",
      "gender": "female",
      "address": "3131 Oak St, Denver, CO",
      "phone": "+1 555-2345",
      "date_of_birth": "1992-11-13"
    },
    {
      "id": 35,
      "first_name": "George",
      "last_name": "Garcia",
      "email": "georgegarcia@example.com",
      "gender": "male",
      "address": "3232 Pine Ave, Salt Lake City, UT",
      "phone": "+1 555-3456",
      "date_of_birth": "1986-02-25"
    },
    {
      "id": 36,
      "first_name": "Holly",
      "last_name": "Parker",
      "email": "hollyparker@example.com",
      "gender": "female",
      "address": "3333 Cedar Rd, Las Vegas, NV",
      "phone": "+1 555-4567",
      "date_of_birth": "1994-05-17"
    },
    {
      "id": 37,
      "first_name": "Ian",
      "last_name": "Evans",
      "email": "ianevans@example.com",
      "gender": "male",
      "address": "3434 Birch Blvd, Seattle, WA",
      "phone": "+1 555-5678",
      "date_of_birth": "1982-03-14"
    },
    {
      "id": 38,
      "first_name": "Jill",
      "last_name": "Morris",
      "email": "jillmorris@example.com",
      "gender": "female",
      "address": "3535 Oak St, Portland, OR",
      "phone": "+1 555-6789",
      "date_of_birth": "1988-10-03"
    },
    {
      "id": 39,
      "first_name": "Kyle",
      "last_name": "Murphy",
      "email": "kylemurphy@example.com",
      "gender": "male",
      "address": "3636 Pine Rd, San Francisco, CA",
      "phone": "+1 555-7890",
      "date_of_birth": "1990-07-22"
    },
    {
      "id": 40,
      "first_name": "Laura",
      "last_name": "Rodriguez",
      "email": "laurarodriguez@example.com",
      "gender": "female",
      "address": "3737 Cedar Ave, Los Angeles, CA",
      "phone": "+1 555-8901",
      "date_of_birth": "1992-01-10"
    },
    {
      "id": 41,
      "first_name": "Michael",
      "last_name": "Wright",
      "email": "michaelwright@example.com",
      "gender": "male",
      "address": "3838 Maple Blvd, Miami, FL",
      "phone": "+1 555-9012",
      "date_of_birth": "1994-04-12"
    },
    {
      "id": 42,
      "first_name": "Nina",
      "last_name": "Taylor",
      "email": "ninataylor@example.com",
      "gender": "female",
      "address": "3939 Birch Rd, Jacksonville, FL",
      "phone": "+1 555-0123",
      "date_of_birth": "1995-06-23"
    },
    {
      "id": 43,
      "first_name": "Oscar",
      "last_name": "Hernandez",
      "email": "oscarhernandez@example.com",
      "gender": "male",
      "address": "4040 Oak Rd, Orlando, FL",
      "phone": "+1 555-1234",
      "date_of_birth": "1990-11-07"
    },
    {
      "id": 44,
      "first_name": "Pamela",
      "last_name": "Fisher",
      "email": "pamela@example.com",
      "gender": "female",
      "address": "4141 Pine Ave, Chicago, IL",
      "phone": "+1 555-2345",
      "date_of_birth": "1993-09-15"
    },
    {
      "id": 45,
      "first_name": "Quincy",
      "last_name": "King",
      "email": "quincyking@example.com",
      "gender": "male",
      "address": "4242 Oak Blvd, Phoenix, AZ",
      "phone": "+1 555-3456",
      "date_of_birth": "1996-01-01"
    },
    {
      "id": 46,
      "first_name": "Rita",
      "last_name": "Lee",
      "email": "ritalee@example.com",
      "gender": "female",
      "address": "4343 Cedar Blvd, New York, NY",
      "phone": "+1 555-4567",
      "date_of_birth": "1987-02-11"
    }
]

export default randomUser
   
  