import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShirtsService } from './shirts.service';
import { CreateShirtDto } from './dto/create-shirt.dto';
import { UpdateShirtDto } from './dto/update-shirt.dto';

@Controller('Shirt')
export class ShirtsController {
  constructor(private readonly ShirtsService: ShirtsService) {}

  @Post()
  create(@Body() createShirtsDto: CreateShirtDto) {
    return this.ShirtsService.create(createShirtsDto);
  }

  @Get()
  findAll() {
    return this.ShirtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ShirtsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShirtsDto: UpdateShirtDto) {
    return this.ShirtsService.update(id, updateShirtsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ShirtsService.remove(+id);
  }
}
