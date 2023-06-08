import { Module } from '@nestjs/common';
import { DressesService } from './dresses.service';
import { DressesController } from './dresses.controller';
import { Dress } from './entities/dress.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dress])],
  controllers: [DressesController],
  providers: [DressesService]
})
export class DressesModule {}
