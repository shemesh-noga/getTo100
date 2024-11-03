import { allUsers, User, Yakira } from "../data/Users";

export default function LeaderBoard({ currentPage }) {
  const usersAverage = allUsers.map((user) => ({
    username: user.name,
    average: user.average,
  }));
  usersAverage.sort((a, b) => a.average - b.average);

  return currentPage === "leaderBoard" ? (
    <>
      <h1>First Place: </h1>
      {usersAverage[0] !== undefined && (
        <h2>
          {usersAverage[0].username} with {usersAverage[0].average} points!!
        </h2>
      )}

      <h1>Second Place: </h1>
      {usersAverage[1] !== undefined && (
        <h2>
          {usersAverage[1].username} with {usersAverage[1].average} points!!
        </h2>
      )}

      <h1>Third Place: </h1>
      {usersAverage[2] !== undefined && (
        <h2>
          {usersAverage[2].username} with {usersAverage[2].average} points!!
        </h2>
      )}
    </>
  ) : null;
}
