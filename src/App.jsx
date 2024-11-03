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
  return (
    <>
      <NavBar />
      {currentPage === "signIn" && <SignIn />}
      {currentPage === "signUp" && <SignUp />}
      {currentPage === "gamePage" && <GamePage />}
      {currentPage === "leaderBoard" && <LeaderBoard />}
    </>
  );
}

export default App;
