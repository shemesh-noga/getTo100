export class User {
  constructor(name) {
    this.name = name;
    this.scores = [];
  }
}

export const Yakira = new User("Yakira");
export const Noga = new User("Noga");

Yakira.scores = [2, 3, 4];
Noga.scores = [1, 2, 3];

export const allUsers = [Yakira, Noga];
