import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PantsService } from './pants.service';
import { CreatePantDto } from './dto/create-pant.dto';
import { UpdatePantDto } from './dto/update-pant.dto';

@Controller('pants')
export class PantsController {
  constructor(private readonly pantsService: PantsService) {}

  @Post()
  create(@Body() createPantDto: CreatePantDto) {
    return this.pantsService.create(createPantDto);
  }

  @Get()
  findAll() {
    return this.pantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pantsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePantDto: UpdatePantDto) {
    return this.pantsService.update(id, updatePantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pantsService.remove(+id);
  }
}
