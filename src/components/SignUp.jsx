import { useState } from "react";
import { User, allUsers } from "../data/Users";

function SignUp({ currentPage, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function checkUsernameSignUp(username) {
    const existingUsers = JSON.parse(window.localStorage.getItem("usersArr"));
    const userNameStatus = existingUsers.some((user) => user.name === username);
    if (userNameStatus) {
      setMessage("username taken. Please pick another one.");
    } else {
      console.log(existingUsers);
      existingUsers.push(new User(username));
      console.log(existingUsers);
      window.localStorage.setItem("usersArr", JSON.stringify(existingUsers));
      setMessage("signed up successfully!\nSign in to play the game:)");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUsernameSignUp(username);
  };

  return currentPage === "signUp" ? (
    <>
      <h2>Sign Up</h2>

      <form action="GET" onSubmit={handleSubmit}>
        <label htmlFor="usernameSignUp">
          Username:
          <input
            type="text"
            id="usernameSignUp"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        {message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </>
  ) : null;
}

export default SignUp;
