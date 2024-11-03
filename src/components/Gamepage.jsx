export default function GamePage({
  currentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  return currentPage === "gamePage" ? (
    <>
      <p>{currentPlayers[0].scores}</p>
    </>
  ) : null;
}
