import { useState } from "react";

export default function PlayerBoard(props) {
  function addScore(moves, name) {
    const existingUsers = JSON.parse(window.localStorage.getItem("usersArr"));
    const thisUser = existingUsers.find((user) => user.name == name);
    const thisUserIndex = existingUsers.indexOf(thisUser);

    existingUsers[thisUserIndex].scores.push(moves);
    console.log(existingUsers[thisUserIndex]);
    let newUsers = JSON.parse(JSON.stringify(existingUsers));
    window.localStorage.setItem("usersArr", JSON.stringify(newUsers));

    // const updatedPlayers = JSON.parse(JSON.stringify(props.currentPlayers));
    // const thisUpdatedUser = updatedPlayers.find((user) => user.name == name);
    // const thisUpdatedUserIndex = updatedPlayers.indexOf(thisUpdatedUser);
    // updatedPlayers[thisUpdatedUserIndex].scores.push(moves);
    // props.setCurrentPlayers(updatedPlayers);
  }

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
