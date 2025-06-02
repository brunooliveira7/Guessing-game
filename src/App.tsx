import styles from "./app.module.css";
import { Header } from "./components/Header";

export function App() {
  function handleRestartGame() {
    console.log("Restart");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
      </main>
    </div>
  );
}
