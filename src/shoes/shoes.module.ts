import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { Shoe } from './entities/shoe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shoe])],
  controllers: [ShoesController],
  providers: [ShoesService]
})
export class ShoesModule {}
