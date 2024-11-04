import { useState } from "react";
import { User, allUsers } from "../data/Users";

function SignIn({
  currentPage,
  setCurrentPage,
  currentPlayers,
  setCurrentPlayers,
}) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function checkUsernameSignIn(username) {
    const existingUsers = JSON.parse(window.localStorage.getItem("usersArr"));
    const userNameStatus = existingUsers.some((user) => user.name === username);

    if (userNameStatus) {
      const thisUser = existingUsers.find((user) => user.name === username);
      const userScores = thisUser.scores;

      const currentPlayerStatus = currentPlayers.some(
        (user) => user.name === username
      );
      currentPlayerStatus
        ? alert("this user is already playing")
        : setCurrentPlayers((prev) => [
            ...prev,
            {
              name: username,
              // number: Math.floor(Math.random() * 100),
              number: 99,
              moves: 0,
              scores: userScores,
            },
          ]);
      setCurrentPage("gamePage");
    } else {
      setMessage("username not found");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUsernameSignIn(username);
  };

  return currentPage === "signIn" ? (
    <div id="signin">
      <h2>Sign In</h2>

      <form action="GET" onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">
          Username:
          <input
            type="text"
            id="usernameSignIn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>

      <p>{message}</p>
    </div>
  ) : null;
}

export default SignIn;
