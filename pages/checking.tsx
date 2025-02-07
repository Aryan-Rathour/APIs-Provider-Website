// components/SomeComponent.js
import React, { useState } from "react";
import useFetchData from "../app/services/getApi";

const SomeComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Conditionally fetch data when the button is clicked
  const { data, error, isLoading } = useFetchData(
"http://localhost:5000/randomJoke?result=4"
  );

  const handleClick = () => {
    setIsClicked(true); // Set state to true when the button is clicked
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>

      {isClicked && data && (
        <div>
          <h1>Fetched Data:</h1>
          <ul>
            {data.map((joke, index) => (
              <li key={index}>{joke.joke}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SomeComponent;
