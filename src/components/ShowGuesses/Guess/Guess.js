import React from "react";
import { checkGuess } from "../../../game-helpers";
import { range } from "../../../utils";

function Guess({ guess, answer }) {
  // if (guess.word === "") return null;
  const wordLength = answer.length;
  let result = checkGuess(guess.word, answer);

  return (
    <p className="guess">
      {range(wordLength).map((i) => (
        <span
          key={guess.key + i}
          className={"cell " + (result?.[i].status || "")}
        >
          {result?.[i].letter || null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
