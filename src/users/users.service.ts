import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number) {
    for (const user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
  }

  removeById(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
