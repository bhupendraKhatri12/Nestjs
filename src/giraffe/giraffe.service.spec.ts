import { Test, TestingModule } from '@nestjs/testing';
import { GiraffeService } from './giraffe.service';

describe('GiraffeService', () => {
  let service: GiraffeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiraffeService],
    }).compile();

    service = module.get<GiraffeService>(GiraffeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
