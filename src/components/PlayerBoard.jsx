export default function PlayerBoard(props) {
  return (
    <div className="playerDiv" id={"div-" + props.name}>
      <h2>Player: {props.name}</h2>
      <h5>Number: {props.number}</h5>
      <button onClick={() => props.handleNumberChange(props.name, "+1")}>
        +1
      </button>
      <button onClick={() => props.handleNumberChange(props.name, "-1")}>
        -1
      </button>
      <button onClick={() => props.handleNumberChange(props.name, "*2")}>
        *2
      </button>
      <button onClick={() => props.handleNumberChange(props.name, "/2")}>
        /2
      </button>
      <h5>Moves: {props.moves}</h5>
      <h6>Score History: {props.score}</h6>

      {props.number === 100 && (
        <>
          <button onClick={() => props.handleQuit(props.name)}>Quit</button>
          <button onClick={() => props.handleNewGame(props.name)}>
            New Game
          </button>
        </>
      )}
    </div>
  );
}
