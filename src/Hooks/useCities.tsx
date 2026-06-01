import { useEffect, useState } from "react";

const BASE_URL = "/api";

interface typeCities {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

function useCities(): [
  typeCities[] | undefined,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const [cities, setCities] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    //const delay = (ms: number) =>
    //new Promise((resolve) => setTimeout(resolve, ms));

    const controller = new AbortController();
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL + "/cities", {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log(data);

        //await delay(500);
        setCities(data);
        setIsLoading(false);
      } catch (e: unknown) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
    return () => controller.abort();
  }, [setCities, setIsLoading]);
  return [cities, loading, setIsLoading];
}

export default useCities;
