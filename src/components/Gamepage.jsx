import { useState } from "react";
import PlayerBoard from "./PlayerBoard";

export default function GamePage({
  currentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  function handleNumberChange(name, action) {
    let updatedPlayers = JSON.parse(JSON.stringify(currentPlayers));
    for (let i = 0; i < updatedPlayers.length; i++) {
      if (updatedPlayers[i].name === name) {
        if (action === "+1") {
          updatedPlayers[i].number += 1;
        } else if (action === "-1") {
          updatedPlayers[i].number -= 1;
        } else if (action === "*2") {
          updatedPlayers[i].number *= 2;
        } else if (action === "/2") {
          updatedPlayers[i].number = Math.floor(updatedPlayers[i].number / 2);
        }
        updatedPlayers[i].moves++;
        break;
      }
    }
    setCurrentPlayers(updatedPlayers);
  }

  function handleQuit(quitter) {
    const thisQuitter = currentPlayers.find((user) => user.name === quitter);
    const i = currentPlayers.indexOf(thisQuitter);
    setCurrentPlayers((prev) => prev.splice(i, 1));
  }

  function handleNewGame(newPlayer) {
    const thisNewPlayer = currentPlayers.find(
      (user) => user.name === newPlayer
    );
    const i = currentPlayers.indexOf(thisNewPlayer);
    setCurrentPlayers((prev) => prev.splice(i, 1));
    setCurrentPlayers((prev) => prev.push(thisNewPlayer));
  }

  return currentPage === "gamePage" ? (
    <>
      <h1>Game</h1>
      {currentPlayers.map((user, i) => (
        <PlayerBoard
          key={i}
          name={user.name}
          number={user.number}
          moves={user.moves}
          score={user.scores}
          handleNumberChange={handleNumberChange}
          handleQuit={handleQuit}
          handleNewGame={handleNewGame}
          setCurrentPlayers={setCurrentPlayers}
          currentPlayers={currentPlayers}
        />
      ))}
    </>
  ) : null;
}
