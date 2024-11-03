export default function GamePage({
  currentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  return currentPage === "gamePage" ? (
    <>
      {currentPlayers.map((user) => (
        <h1>
          {user.name}, {user.scores}, {user.num}, {user.moves}
        </h1>
      ))}
    </>
  ) : null;
}
