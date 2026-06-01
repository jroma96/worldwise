import useCities from "../Hooks/useCities";
import React, { createContext, useState } from "react";

const BASE_URL = "http://localhost:3001";

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

interface typeCityContext {
  cities: typeCities[] | undefined;
  isLoading: boolean;
  getCity: (id: string) => Promise<void>;
  currentCity: typeCities;
}

const initObj = {
  cityName: "",
  country: "",
  emoji: "",
  date: "",
  notes: "",
  position: {
    lat: 0,
    lng: 0,
  },
  id: 0,
};

const CitiesContext = createContext<typeCityContext>({
  cities: [],
  isLoading: false,
  getCity: async (id: string) => {
    console.log(id);
  },
  currentCity: initObj,
});

function CitiesProvider({ children }: { children: React.ReactNode }) {
  const [cities, isLoading, setIsLoading] = useCities();
  const [currentCity, setCurrentCity] = useState<typeCities>(initObj);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      setCurrentCity(initObj);
      const res = await fetch(BASE_URL + "/cities/" + id);
      const data = await res.json();
      setCurrentCity(data);
      setIsLoading(false);
    } catch (e: unknown) {
      console.log(e);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        currentCity: currentCity,
        getCity: getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
