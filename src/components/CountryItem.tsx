import styles from "./CountryItem.module.css";

interface typeCountry {
  country: string;
  emoji: string;
  id: number;
}

function CountryItem({ country }: { country: typeCountry }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
