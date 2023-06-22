import { Controller, Get } from '@nestjs/common';
import { ProofOfConceptService } from './proof-of-concept.service';
import { Company } from './schemas/company.schemas';
@Controller('proof-of-concept')
export class ProofOfConceptController {
  constructor(private readonly mainService: ProofOfConceptService) {}

  @Get()
  async findAll(): Promise<Company[]> {
    return this.mainService.findAll();
  }
}
