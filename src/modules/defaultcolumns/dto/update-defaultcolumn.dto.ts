import { PartialType } from '@nestjs/mapped-types';
import { CreateDefaultcolumnDto } from './create-defaultcolumn.dto';

export class UpdateDefaultcolumnDto extends PartialType(CreateDefaultcolumnDto) {}
