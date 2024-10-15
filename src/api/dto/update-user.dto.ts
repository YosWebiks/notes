import { PartialType } from '@nestjs/mapped-types';
import { CreateApiDto } from './create-api.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
