import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import useCitiesContext from "../contexts/useCitiesContext";

interface typeCountry {
  country: string;
  emoji: string;
  id: number;
}

function CountryList() {
  const { cities, isLoading } = useCitiesContext();
  const init: typeCountry[] = [];
  const countries: typeCountry[] | undefined = cities?.reduce(
    (arr: typeCountry[], cur) => {
      if (!arr.map((i) => i.country).includes(cur.country)) {
        const obj: typeCountry = {
          country: cur.country,
          emoji: cur.emoji,
          id: cur.id,
        };
        arr.push(obj);
        return arr;
      }
      return arr;
    },
    init,
  );
  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
