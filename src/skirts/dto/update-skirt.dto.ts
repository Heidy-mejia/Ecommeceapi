import { PartialType } from '@nestjs/mapped-types';
import { CreateSkirtDto } from './create-skirt.dto';

export class UpdateSkirtDto extends PartialType(CreateSkirtDto) {}
