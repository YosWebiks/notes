import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Note, noteSchema } from './note.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [noteSchema], default: [] })
  notes: Note[];
}

export const userSchema = SchemaFactory.createForClass(User);
