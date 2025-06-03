import styles from "./styles.module.css";
import { Letter } from "../Letter";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="R" size="small" color="wrong" />
        <Letter value="l" size="small" color="correct" />
      </div>
    </div>
  );
}
