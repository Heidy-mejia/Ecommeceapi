import { Injectable } from '@nestjs/common';
import { CreateSkirtDto } from './dto/create-skirt.dto';
import { UpdateSkirtDto } from './dto/update-skirt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skirt } from './entities/skirt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkirtsService {

  constructor(
    @InjectRepository(Skirt)
    private skirtsRepository: Repository<Skirt>,
  ) { }

  async create(createSkirtDto: CreateSkirtDto) {
    await this.skirtsRepository.save(createSkirtDto);
  }

  findAll() {
    return this.skirtsRepository.find();
  }

  findOne(id: string) {
    return this.skirtsRepository.findOne({ where: {id}});
  }

  async update(id: string, updateShoeDto: UpdateSkirtDto) {
    const updatedProduct = await this.skirtsRepository.update(id, updateShoeDto);
    return updatedProduct;
  }

  remove(id: number) {
    this.skirtsRepository.delete(id);
  }
}
