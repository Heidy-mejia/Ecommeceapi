import { Injectable } from '@nestjs/common';
import { CreateShirtDto } from './dto/create-shirt.dto';
import { UpdateShirtDto } from './dto/update-shirt.dto';
import { shirts } from './entities/shirt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShirtsService {

  constructor(
    @InjectRepository(shirts)
    private shirtsRepository: Repository<shirts>,
  ) { }

  async create(createShirtsDto: CreateShirtDto) {
    await this.shirtsRepository.save(createShirtsDto);
  }

  findAll() {
    return this.shirtsRepository.find();
  }

  findOne(id: string) {
    return this.shirtsRepository.findOne({ where: {id}});
  }

  async update(id: string, updateShirtsDto: UpdateShirtDto) {
    const updatedProduct = await this.shirtsRepository.update(id, updateShirtsDto);
    return updatedProduct;
  }

  remove(id: number) {
    this.shirtsRepository.delete(id);
  }
}
