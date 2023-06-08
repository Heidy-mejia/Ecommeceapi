import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkirtsService } from './skirts.service';
import { CreateSkirtDto } from './dto/create-skirt.dto';
import { UpdateSkirtDto } from './dto/update-skirt.dto';

@Controller('skirts')
export class SkirtsController {
  constructor(private readonly SkirtsService: SkirtsService) {}

  @Post()
  create(@Body() createSkirtDto: CreateSkirtDto) {
    return this.SkirtsService.create(createSkirtDto);
  }

  @Get()
  findAll() {
    return this.SkirtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SkirtsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkirtDto: UpdateSkirtDto) {
    return this.SkirtsService.update(id, updateSkirtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SkirtsService.remove(+id);
  }
}
