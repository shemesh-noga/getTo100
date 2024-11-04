export default function NavBar({ setCurrentPage, usersls, setUsersLS }) {
  function handleCurrentPage(page) {
    setCurrentPage(page);
  }
  return (
    <div id={"navBar"}>
      <button onClick={() => handleCurrentPage("signIn")}>Sign In</button>
      <button onClick={() => handleCurrentPage("signUp")}>Sign Up</button>
      <button onClick={() => handleCurrentPage("gamePage")}>Game</button>
      <button
        usersls={usersls}
        onClick={() => {
          handleCurrentPage("leaderBoard");
          let usersAllArr = JSON.parse(window.localStorage.getItem("usersArr"));
          setUsersLS(usersAllArr);
        }}
      >
        Leader Board
      </button>
    </div>
  );
}
