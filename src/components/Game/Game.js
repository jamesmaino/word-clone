import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import ShowGuesses from "../ShowGuesses";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED)
      .fill({ word: "" })
      .map((x) => ({ ...x, key: crypto.randomUUID() }))
  );

  const [guessCounter, setGuessCounter] = React.useState(0);

  const [gameStatus, setGameStatus] = React.useState("playing"); // playing, win, lose

  function updateGameStatus(guess) {
    if (guess.toUpperCase() === answer.toUpperCase()) {
      setGameStatus("win");
    }
    if (guessCounter === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lose");
    }

    return;
  }

  function saveGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses[guessCounter] = { word: guess, key: guesses[guessCounter].key };
    setGuesses(newGuesses);
    setGuessCounter((prev) => prev + 1);
    return;
  }
  return (
    <>
      <ShowGuesses guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameStatus !== "playing"}
        saveGuess={saveGuess}
        updateGameStatus={updateGameStatus}
      />
      {gameStatus === "win" && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {guessCounter} {guessCounter == 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
        </div>
      )}
      {gameStatus === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
