import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { Shoe } from './entities/shoe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShoesService {

  constructor(
    @InjectRepository(Shoe)
    private shoesRepository: Repository<Shoe>,
  ) { }

  async create(createShoeDto: CreateShoeDto) {
    await this.shoesRepository.save(createShoeDto);
  }

  findAll() {
    return this.shoesRepository.find();
  }

  findOne(id: string) {
    return this.shoesRepository.findOne({ where: {id}});
  }

  async update(id: string, updateShoeDto: UpdateShoeDto) {
    const updatedProduct = await this.shoesRepository.update(id, updateShoeDto);
    return updatedProduct;
  }

  remove(id: number) {
    this.shoesRepository.delete(id);
  }
}
