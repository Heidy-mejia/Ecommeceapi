import { Test, TestingModule } from '@nestjs/testing';
import { DressesController } from './dresses.controller';
import { DressesService } from './dresses.service';

describe('DressesController', () => {
  let controller: DressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DressesController],
      providers: [DressesService],
    }).compile();

    controller = module.get<DressesController>(DressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
