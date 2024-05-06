import { Controller, Get } from '@nestjs/common';

interface User {
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  @Get('get')
  async getUsers(): Promise<{ users: User[] }> {
    return {
      users: [
        {
          name: "ram",
          email: "ram@gmail.com"
        },
        {
          name: "shyam",
          email: "shyam@gmail.com"
        }
      ]
    };
  }
}
