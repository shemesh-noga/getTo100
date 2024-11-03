import { useState } from "react";
import { User, allUsers } from "../data/Users";

function SignIn({ currentPage, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function checkUsernameSignIn(username) {
    const userNameStatus = allUsers.some((user) => user.name === username);
    if (userNameStatus) {
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
    <>
      <h2>Sign Ip</h2>

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
    </>
  ) : null;
}

export default SignIn;
