import { Injectable } from '@nestjs/common';
import { CreateDressDto } from './dto/create-dress.dto';
import { UpdateDressDto } from './dto/update-dress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dress } from './entities/dress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DressesService {

  constructor(
    @InjectRepository(Dress)
    private dressRepository: Repository<Dress>,
  ) { }

  async create(createDressDto: CreateDressDto) {
    await this.dressRepository.save(createDressDto);
  }

  findAll() {
    return this.dressRepository.find();
  }

  findOne(id: string) {
    return this.dressRepository.findOne({ where: {id}});
  }

  async update(id: string, updateDressDto: UpdateDressDto) {
    const updatedProduct = await this.dressRepository.update(id, updateDressDto);
    return updatedProduct;
  }

  remove(id: number) {
    this.dressRepository.delete(id);
  }
}
