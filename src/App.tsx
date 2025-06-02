import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";

export function App() {
  function handleRestartGame() {
    console.log("Restart");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais usadas no mundo" />
      </main>
    </div>
  );
}
