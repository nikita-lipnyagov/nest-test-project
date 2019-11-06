import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateUserDto} from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.removeById(Number(id));
  }
}
