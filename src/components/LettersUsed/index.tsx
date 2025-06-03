import styles from "./styles.module.css";
import { Letter } from "../Letter";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="a" size="small" />
        <Letter value="b" size="small" />
      </div>
    </div>
  );
}
