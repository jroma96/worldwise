import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

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

function useCitiesContext(): {
  cities: typeCities[] | undefined;
  isLoading: boolean;
  currentCity: typeCities;
  getCity: (id: string, controller: AbortController) => Promise<void>;
} {
  const { cities, isLoading, currentCity, getCity } = useContext(CitiesContext);
  return { cities, isLoading, currentCity, getCity };
}

export default useCitiesContext;
