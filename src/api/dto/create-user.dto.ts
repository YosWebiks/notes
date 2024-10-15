import { PartialType } from '@nestjs/mapped-types';
import { CreateApiDto } from './create-api.dto';

export class CreateUserDto extends PartialType(CreateApiDto) {}
