import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

interface typeCountry {
  country: string;
  emoji: string;
  id: number;
}

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

function CountryList({
  cities,
  isLoading,
}: {
  cities: typeCities[] | undefined;
  isLoading: boolean;
}) {
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
