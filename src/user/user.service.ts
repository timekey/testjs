import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { CompanyDocument } from '../company/schemas/company.schema';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly userDocumentModel: Model<UserDocument>,
    @InjectModel('company')
    private readonly companyDocumentModel: Model<CompanyDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.name || !createUserDto.email) {
      throw new BadRequestException('Name and Email are required');
    }

    const user = await new this.userDocumentModel(createUserDto);
    await user.save();

    try {
      new EmailService().send({
        from: 'info@company.test',
        to: createUserDto.email,
        subject: 'Welcome to company.test',
        html: ` Hello ${createUserDto.name} <br> Welcome to our site! <br> you are registered for test ;) `,
      });
    } catch (e) {
      console.error(e);
    }
    return user;
  }

  findAll() {
    return this.userDocumentModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userDocumentModel.findById(id).exec();
    if (user) {
      const result = user.toObject();
      const companies = await this.companyDocumentModel
        .find({ userId: id })
        .select('name address');
      if (companies) {
        result['companies'] = companies;
      }
      return result;
    }
    return null;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userDocumentModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userDocumentModel.findByIdAndDelete(id);
  }
}
