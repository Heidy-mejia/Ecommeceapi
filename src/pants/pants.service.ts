import { Injectable } from '@nestjs/common';
import { CreatePantDto } from './dto/create-pant.dto';
import { UpdatePantDto } from './dto/update-pant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pant } from './entities/pant.entity';

@Injectable()
export class PantsService {

  constructor(
    @InjectRepository(Pant)
    private pantRepository: Repository<Pant>,
  ) { }

  async create(createPantDto: CreatePantDto) {
    await this.pantRepository.save(createPantDto);
  }

  findAll() {
    return this.pantRepository.find();
  }

  findOne(id: string) {
    return this.pantRepository.findOne({ where: {id}});
  }

  async update(id: string, updatePantDto: UpdatePantDto) {
    const updatedProduct = await this.pantRepository.update(id, updatePantDto);
    return updatedProduct;
  }

  remove(id: number) {
    this.pantRepository.delete(id);
  }
}
