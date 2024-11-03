import { allUsers, User, Yakira } from "../data/Users";

export default function LeaderBoard({ currentPage }) {
  const usersAverage = allUsers.map((user) => ({
    username: user.name,
    average: user.average,
  }));
  usersAverage.sort((a, b) => a.average - b.average);
  console.log("usersAverage: ", usersAverage);
  return currentPage === "leaderBoard" ? (
    <>
      <h1>First Place: {}</h1>
    </>
  ) : null;
}
