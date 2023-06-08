import { PartialType } from '@nestjs/mapped-types';
import { CreatePantDto } from './create-pant.dto';

export class UpdatePantDto extends PartialType(CreatePantDto) {}
