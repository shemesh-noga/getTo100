import { allUsers } from "../data/Users";

export default function LeaderBoard({ currentPage, usersls = allUsers }) {
  function average(user) {
    const thisScores = user.scores;
    const averageScore =
      thisScores.reduce((acc, val) => acc + val, 0) / thisScores.length;
    return Math.round(averageScore);
  }
  const usersAverage = usersls.map((user) => ({
    username: user.name,
    average: average(user),
  }));
  console.log("usersAverage: ", usersAverage);

  console.log("allUsers: ", allUsers);
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
