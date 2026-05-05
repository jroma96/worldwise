import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

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

function CityList({
  cities,
  isLoading,
}: {
  cities: typeCities[] | undefined;
  isLoading: boolean;
}) {
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
