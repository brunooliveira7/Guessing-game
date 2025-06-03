import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";
import { WORDS, type Challenge } from "./utils/words";
import { useEffect, useState } from "react";

export function App() {
  const [attempts, setAttempts] = useState(0);
  const [letters, setLetters] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    console.log("Restart");
  }

  function starGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);

    setAttempts(0);
    setLetters("");
  }

  useEffect(() => {
    starGame();
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais usadas no mundo" />

        <div className={styles.word}>
          <Letter value="r" />
          <Letter value="e" />
          <Letter value="a" />
          <Letter value="c" />
          <Letter value="t" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />

          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  );
}
