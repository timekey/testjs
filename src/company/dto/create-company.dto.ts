import { Types } from 'mongoose';

export class CreateCompanyDto {
  name: string;
  email: string;
  userId: Types.ObjectId;
}
