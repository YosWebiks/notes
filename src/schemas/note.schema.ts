import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Note {
  @Prop({
    required: true,
  })
  title: string;

  @Prop()
  body: string;

  @Prop({
    default: Date.now
  })
  createdAt: Date;
}

export const noteSchema = SchemaFactory.createForClass(Note);
