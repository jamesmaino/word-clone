import React from "react";
import Guess from "./Guess";

function ShowGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.key} guess={guess} answer={answer}></Guess>
      ))}
    </div>
  );
}

export default ShowGuesses;
