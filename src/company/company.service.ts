import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Model } from 'mongoose';
import { CompanyDocument } from './schemas/company.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('company')
    private readonly companyDocumentModel: Model<CompanyDocument>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    // const company = new this.companyDocumentModel(createCompanyDto);
    // return {statusCode: 200, message: 'a new company added', data: company.save()};
    return this.companyDocumentModel.create(createCompanyDto);
  }

  findAll() {
    return this.companyDocumentModel.find().exec();
  }

  findOne(id: string) {
    return this.companyDocumentModel.findById(id);
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyDocumentModel.findByIdAndUpdate(id, updateCompanyDto);
  }

  remove(id: string) {
    return this.companyDocumentModel.findByIdAndDelete(id);
  }
}
