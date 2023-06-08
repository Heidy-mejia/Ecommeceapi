import { Test, TestingModule } from '@nestjs/testing';
import { PantsController } from './pants.controller';
import { PantsService } from './pants.service';

describe('PantsController', () => {
  let controller: PantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantsController],
      providers: [PantsService],
    }).compile();

    controller = module.get<PantsController>(PantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
