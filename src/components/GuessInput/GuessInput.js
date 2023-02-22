import React from "react";

function GuessInput({ disabled, saveGuess, updateGameStatus }) {
  const [guess, setGuess] = React.useState("");
  const [color, setColor] = React.useState("");

  function handleWarning() {
    setColor("red");
    setTimeout(() => setColor("white"), 300);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) {
          handleWarning();
          return;
        }
        saveGuess(guess);
        updateGameStatus(guess);
        setGuess("");
        console.log({ Guess: guess });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {
        <input
          disabled={disabled}
          id="guess-input"
          style={{
            backgroundColor: color,
            transition: "background-color 300ms ease-out",
          }}
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      }
    </form>
  );
}

export default GuessInput;
