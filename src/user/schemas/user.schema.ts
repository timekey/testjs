import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ isRequired: true })
  name: string;

  @Prop({ isRequired: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
