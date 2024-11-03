import { useState } from "react";

export default function GamePage({
  currentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  function handleAddOne(num, name) {
    let i = currentPlayers.indexOf(name);
    setCurrentPlayers((prev) => (prev[i].number = num + 1));
  }

  return currentPage === "gamePage" ? (
    <>
      {currentPlayers.map((user) => {
        <div className="playerDiv" id={"div-" + user.name}>
          <h2>Player: {user.name}</h2>
          <h5>Number: {user.number}</h5>
          <button onClick={() => handleAddOne(user.number, user.name)}>
            +1
          </button>
          <h5>Moves: {user.moves}</h5>
          <h6>Score History: {user.score}</h6>
        </div>;
      })}
    </>
  ) : null;
}
