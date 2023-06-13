import React, { useState, useEffect } from "react";

function App() {
  const [picOfDogs, setPicOfDogs] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setPicOfDogs(data.message);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return <img alt="A Random Dog" src={picOfDogs} />;
}

export default App;
