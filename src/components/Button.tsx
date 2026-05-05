import type { ReactNode, MouseEvent } from "react";
import styles from "./Button.module.css";

type props = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: string;
};

function Button({ children, onClick, type }: props) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
