interface User {
  id: number;
  name: string;
  isActive: boolean;
}

class UserManager {
  private users: User[] = [];

  constructor(users: User[]) {
    this.users = users;
  }

  activateUser(userId: number): void {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.isActive = true;
      console.log(`User ${user.name} activated.`);
    }
  }

  deactivateUser(userId: number): void {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.isActive = false;
      console.log(`User ${user.name} deactivated.`);
    }
  }
}

const users: User[] = [
  { id: 1, name: 'Alice', isActive: false },
  { id: 2, name: 'Bob', isActive: false },
  { id: 3, name: 'Charlie', isActive: true }
];

const userManager = new UserManager(users);
userManager.activateUser(2);
userManager.deactivateUser(3);
