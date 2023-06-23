import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schemas';

@Injectable()
export class ProofOfConceptService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }
}
