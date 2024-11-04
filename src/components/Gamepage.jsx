import { useState } from "react";
import PlayerBoard from "./PlayerBoard";

export default function GamePage({
  currentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  const [playersTurn, setPlayersTurn] = useState(0);

  function handleNumberChange(name, e) {
    const updatedPlayers = JSON.parse(JSON.stringify(currentPlayers));
    const thisPlayer = updatedPlayers.find((player) => player.name === name);
    const thisPlayerIndex = updatedPlayers.indexOf(thisPlayer);
    const action = e.target.value;
    const prevNum = JSON.parse(
      JSON.stringify(updatedPlayers[thisPlayerIndex].number)
    );
    updatedPlayers[thisPlayerIndex].number = Math.floor(
      eval(`${prevNum}${action}`)
    );
    updatedPlayers[thisPlayerIndex].moves++;

    if (updatedPlayers[thisPlayerIndex].number == 100) {
      const existingPlayers = JSON.parse(
        window.localStorage.getItem("usersArr")
      );
      const thisUser = existingPlayers.find((user) => user.name === name);
      const thisUserIndex = existingPlayers.indexOf(thisUser);
      existingPlayers[thisUserIndex].scores.push(
        updatedPlayers[thisPlayerIndex].moves
      );
      window.localStorage.setItem("usersArr", JSON.stringify(existingPlayers));
      updatedPlayers[thisPlayerIndex].scores =
        existingPlayers[thisUserIndex].scores;
    }

    playersTurn === currentPlayers.length - 1
      ? setPlayersTurn(0)
      : setPlayersTurn((prev) => (prev += 1));

    setCurrentPlayers(updatedPlayers);
  }

  function handleQuit(quitter) {
    const thisQuitter = currentPlayers.find((user) => user.name === quitter);
    const i = currentPlayers.indexOf(thisQuitter);
    const updatedPlayers = JSON.parse(JSON.stringify(currentPlayers));
    updatedPlayers.splice(i, 1);
    setCurrentPlayers(updatedPlayers);
  }

  function handleNewGame(newPlayer) {
    const thisNewPlayer = currentPlayers.find(
      (user) => user.name === newPlayer
    );
    const i = currentPlayers.indexOf(thisNewPlayer);
    const updatedPlayers = JSON.parse(JSON.stringify(currentPlayers));
    updatedPlayers[i].moves = 0;
    updatedPlayers[i].number = Math.floor(Math.random() * 99);
    setCurrentPlayers(updatedPlayers);
  }

  return currentPage === "gamePage" ? (
    <>
      <h1>Game</h1>
      {currentPlayers.map((user, i) => (
        <PlayerBoard
          key={i}
          id={i}
          name={user.name}
          number={user.number}
          moves={user.moves}
          score={user.scores}
          handleNumberChange={handleNumberChange}
          handleQuit={handleQuit}
          handleNewGame={handleNewGame}
          playersTurn={playersTurn}
          setPlayersTurn={setPlayersTurn}
          currentPlayers={currentPlayers}
          setCurrentPlayers={setCurrentPlayers}
        />
      ))}
    </>
  ) : null;
}
