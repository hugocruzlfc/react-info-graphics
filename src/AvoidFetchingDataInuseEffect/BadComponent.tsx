import React, { useEffect, useState } from "react";

interface IndexProps {}

const BadComponent: React.FC<IndexProps> = () => {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImage(data.message);
      //No caching, no deduping multiple requests, poor error handing, no pagination and lazy loading data handlers
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Avoid Fetching Data in useEffect</div>
      <div>
        {dogImage && (
          <img
            src={dogImage}
            alt="dog"
          />
        )}
      </div>
    </>
  );
};

export default BadComponent;
