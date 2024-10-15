import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create(user: CreateUserDto) {
    return 'This action adds a new api';
  }

  findOne(id: string) {
    return `This action returns a #${id} api`;
  }

  update(id: string, updateApiDto: UpdateUserDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: string) {
    return `This action removes a #${id} api`;
  }

}
