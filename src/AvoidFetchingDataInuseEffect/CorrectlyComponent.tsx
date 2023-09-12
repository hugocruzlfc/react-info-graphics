import React from "react";
import { useQuery } from "@tanstack/react-query";

interface CorrectlyComponentProps {}

const CorrectlyComponent: React.FC<CorrectlyComponentProps> = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      return data;
    },
  });

  //Caching, deduping multiple requests, error handing strong, pagination and lazy loading data handlers

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        <p>An error has ocurred</p>
      </div>
    );
  return (
    <div>
      <p>Avoid Fetching Data in useEffect</p>
      <p>Should be use any library for that. I prefer TanStack React-Query</p>
      {data?.message && (
        <img
          src={data.message}
          alt="dog"
        />
      )}
    </div>
  );
};

export default CorrectlyComponent;
