import { Test, TestingModule } from '@nestjs/testing';
import { ProofOfConceptController } from './proof-of-concept.controller';

describe('ProofOfConceptController', () => {
  let controller: ProofOfConceptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProofOfConceptController],
    }).compile();

    controller = module.get<ProofOfConceptController>(ProofOfConceptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
