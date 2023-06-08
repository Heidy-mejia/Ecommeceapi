import { Module } from '@nestjs/common';
import { SkirtsService } from './skirts.service';
import { SkirtsController } from './skirts.controller';
import { Skirt } from './entities/skirt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Skirt])],
  controllers: [SkirtsController],
  providers: [SkirtsService]
})
export class SkirtsModule {}
