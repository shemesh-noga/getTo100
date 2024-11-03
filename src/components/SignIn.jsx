import { useState } from "react";
import { User, allUsers } from "../data/Users";

function SignIn({ currentPage, setCurrentPage }) {
  const [username, setUsername] = useState("");

  function checkUsername(username) {
    const userNameStatus = allUsers.some((user) => user.name === username);

    console.log(typeof "Noga");

    if (userNameStatus) {
      alert("signed in succefully");
      setCurrentPage("gamePage");
    } else {
      alert("username not found");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUsername(username);
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
    </>
  ) : null;
}

export default SignIn;
