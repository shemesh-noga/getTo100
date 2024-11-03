export class User {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }

  get average() {
    const score = this.scores;
    const averageScore =
      score.reduce((acc, val) => acc + val, 0) / score.length;
    return averageScore;
  }
}

export const Yakira = new User("Yakira");
export const Noga = new User("Noga");

Yakira.scores = [2, 3, 4];
Noga.scores = [1, 2, 3];

export const allUsers = [Yakira, Noga];
