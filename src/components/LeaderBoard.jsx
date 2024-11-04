import { allUsers, User, Yakira } from "../data/Users";

export default function LeaderBoard({ currentPage }) {
  const usersAverage = allUsers.map((user) => ({
    username: user.name,
    average: user.average,
  }));
  usersAverage.sort((a, b) => a.average - b.average);

  return currentPage === "leaderBoard" ? (
    <>
      <h2>First Place: </h2>
      {usersAverage[0] !== undefined && (
        <h3>
          {usersAverage[0].username} with {usersAverage[0].average} points!!
        </h3>
      )}

      <h2>Second Place: </h2>
      {usersAverage[1] !== undefined && (
        <h3>
          {usersAverage[1].username} with {usersAverage[1].average} points!!
        </h3>
      )}

      <h2>Third Place: </h2>
      {usersAverage[2] !== undefined && (
        <h3>
          {usersAverage[2].username} with {usersAverage[2].average} points!!
        </h3>
      )}
    </>
  ) : null;
}
