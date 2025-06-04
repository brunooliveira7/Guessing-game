import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";
import { WORDS, type Challenge } from "./utils/words";
import { useEffect, useState } from "react";

export function App() {
  const [attempts, setAttempts] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [letters, setLetters] = useState("");
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

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

  if (!challenge) {
    return;
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letters.trim()) {
      return alert("Type a letter");
    }

    const value = letters.toUpperCase();
    const exists = lettersUsed.find(
      (used) => used.value.toLocaleUpperCase() === value
    );

    if (exists) {
      return alert(`Letter already used ${value}`);
    }

    setLettersUsed((prevState) => [...prevState, { value, correct: false }]);
    setLetters("");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais usadas no mundo" />

        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letters}
            onChange={(e) => setLetters(e.target.value)}
          />

          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
