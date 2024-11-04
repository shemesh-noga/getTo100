export default function PlayerBoard({
  id,
  name,
  number,
  moves,
  score,
  handleNumberChange,
  handleQuit,
  handleNewGame,
  playersTurn,
  currentPlayers,
  setCurrentPlayers,
}) {
  function handleDiabledButtons(id) {
    return playersTurn === id ? false : true;
  }

  function addScoreToLS(thisName, thisMoves) {
    console.log("hiiii");
    const existingPlayers = JSON.parse(window.localStorage.getItem("usersArr"));
    const thisUser = existingPlayers.find((user) => user.name === thisName);
    const thisUserIndex = existingPlayers.indexOf(thisUser);
    existingPlayers[thisUserIndex].scores.push(thisMoves);
    console.log("moves: " + thisMoves);
    window.localStorage.setItem("usersArr", JSON.stringify(existingPlayers));
    return true;
  }

  return (
    <div className="playerDiv" id={id}>
      <h2>Player: {name}</h2>
      <h5>Number: {number}</h5>
      <button
        value={"+1"}
        disabled={handleDiabledButtons(id)}
        onClick={(e) => handleNumberChange(name, e)}
      >
        +1
      </button>
      <button
        value={"-1"}
        disabled={handleDiabledButtons(id)}
        onClick={(e) => handleNumberChange(name, e)}
      >
        -1
      </button>
      <button
        value={"*2"}
        disabled={handleDiabledButtons(id)}
        onClick={(e) => handleNumberChange(name, e)}
      >
        *2
      </button>
      <button
        value={"/2"}
        disabled={handleDiabledButtons(id)}
        onClick={(e) => handleNumberChange(name, e)}
      >
        /2
      </button>
      <h5>Moves: {moves}</h5>
      <h6>
        Score History:{" "}
        {JSON.stringify(score)
          .replace(/^\[|\]$/g, "")
          .replace(/,/g, ", ")}
      </h6>

      {number === 100 && (
        <>
          <button onClick={() => handleQuit(name)}>Quit</button>
          <button onClick={() => handleNewGame(name)}>New Game</button>
        </>
      )}
    </div>
  );
}
