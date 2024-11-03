export const allUsers = [
  {
    name: "Yakira",
    scores: [5, 7, 8],
  },
  {
    name: "Noga",
    scores: [10, 5, 6],
  },
];

export class User {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }
}
