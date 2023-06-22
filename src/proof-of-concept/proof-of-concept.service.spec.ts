import { Test, TestingModule } from '@nestjs/testing';
import { ProofOfConceptService } from './proof-of-concept.service';

describe('ProofOfConceptService', () => {
  let service: ProofOfConceptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProofOfConceptService],
    }).compile();

    service = module.get<ProofOfConceptService>(ProofOfConceptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
