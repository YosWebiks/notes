import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost/notes')],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
