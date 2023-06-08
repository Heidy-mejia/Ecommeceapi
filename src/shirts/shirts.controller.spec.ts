import { Test, TestingModule } from '@nestjs/testing';
import { ShirtsController } from './shirts.controller';
import { ShirtsService } from './shirts.service';

describe('ShirtsController', () => {
  let controller: ShirtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShirtsController],
      providers: [ShirtsService],
    }).compile();

    controller = module.get<ShirtsController>(ShirtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
