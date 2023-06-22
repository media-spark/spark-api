import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './schemas/company.schemas';
import { ProofOfConceptController } from './proof-of-concept.controller';
import { ProofOfConceptService } from './proof-of-concept.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  providers: [ProofOfConceptService],
  controllers: [ProofOfConceptController],
})
export class ProofOfConceptModule {}
