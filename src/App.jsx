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
  const [currentPlayers, setCurrentPlayers] = useState([
    { name: "Yakira", number: 50, score: [1, 2, 3], moves: 3 },
    { name: "Noga", number: 50, score: [5, 2, 3], moves: 4 },
  ]);

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
      <SignUp currentPage={currentPage} setCurrentPage={setCurrentPage} />

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
