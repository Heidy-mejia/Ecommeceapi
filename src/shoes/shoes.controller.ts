import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';

@Controller('Shoes')
export class ShoesController {
  constructor(private readonly ShoesService: ShoesService) {}

  @Post()
  create(@Body() createShoesDto: CreateShoeDto) {
    return this.ShoesService.create(createShoesDto);
  }

  @Get()
  findAll() {
    return this.ShoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ShoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoeDto: UpdateShoeDto) {
    return this.ShoesService.update(id, updateShoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ShoesService.remove(+id);
  }
}
