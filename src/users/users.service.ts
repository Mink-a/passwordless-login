import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Anil',
      email: 'anil@gmail.com',
    },
    {
      id: 2,
      name: 'Ajay',
      email: 'ajay@gmail.com',
    },
    {
      id: 3,
      name: 'Minkhant',
      email: 'minkhant.kyaw@kbzbank.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email == email);
  }
}
