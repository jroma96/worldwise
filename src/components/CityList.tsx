import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import useCitiesContext from "../contexts/useCitiesContext";

function CityList() {
  const { cities, isLoading } = useCitiesContext();
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
