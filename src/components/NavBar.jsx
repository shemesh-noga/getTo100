export default function NavBar({ setCurrentPage }) {
  function handleCurrentPage(page) {
    setCurrentPage(page);
  }
  return (
    <div id={"navBar"}>
      <button onClick={() => handleCurrentPage("signIn")}>Sign In</button>
      <button onClick={() => handleCurrentPage("signUp")}>Sign Up</button>
      <button onClick={() => handleCurrentPage("gamePage")}>Game</button>
      <button onClick={() => handleCurrentPage("leaderBoard")}>
        Leader Board
      </button>
    </div>
  );
}
