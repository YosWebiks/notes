import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/notes')],
  controllers: [ApiController],
  providers: [ApiService, UserService],
})
export class ApiModule {}
