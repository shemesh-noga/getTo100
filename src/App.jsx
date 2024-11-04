import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GamePage from "./components/Gamepage";
import LeaderBoard from "./components/LeaderBoard";
import { User, allUsers } from "./data/Users";

function App() {
  const [currentPage, setCurrentPage] = useState("signIn");
  const [currentPlayers, setCurrentPlayers] = useState([]);

  // window.localStorage.clear();
  // window.localStorage.setItem("usersArr", JSON.stringify(allUsers));

  // initiallize local storage:
  let usersLocalStorage = window.localStorage.getItem("usersArr");
  if (usersLocalStorage === null) {
    window.localStorage.clear();
    window.localStorage.setItem("usersArr", JSON.stringify(allUsers));
  }

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      <SignIn
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentPlayers={currentPlayers}
        setCurrentPlayers={setCurrentPlayers}
      />
      <SignUp currentPage={currentPage} currentPlayers={currentPlayers} />
      <GamePage
        currentPage={currentPage}
        currentPlayers={currentPlayers}
        setCurrentPlayers={setCurrentPlayers}
      />
      <LeaderBoard currentPage={currentPage} />
    </>
  );
}

export default App;
