import { Module } from '@nestjs/common';
import { PantsService } from './pants.service';
import { PantsController } from './pants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pant } from './entities/pant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pant])],
  controllers: [PantsController],
  providers: [PantsService]
})
export class PantsModule {}
