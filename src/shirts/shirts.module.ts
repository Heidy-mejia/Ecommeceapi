import { Module } from '@nestjs/common';
import { ShirtsService } from './shirts.service';
import { ShirtsController } from './shirts.controller';
import { shirts } from './entities/shirt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([shirts])],
  controllers: [ShirtsController],
  providers: [ShirtsService]
})
export class ShirtsModule {}
