import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GamePage from "./components/Gamepage";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [currentPage, setCurrentPage] = useState("signIn");
  const [currentPlayers, setCurrentPlayers] = useState([]);
  console.log(currentPage);
  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      <SignIn currentPage={currentPage} />
      {currentPage === "signUp" && <SignUp />}
      {currentPage === "gamePage" && <GamePage />}
      {currentPage === "leaderBoard" && <LeaderBoard />}
    </>
  );
}

export default App;
