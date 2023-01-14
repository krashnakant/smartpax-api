import { PartialType } from '@nestjs/mapped-types';
import { CreateDefaultcolumndropdownDto } from './create-defaultcolumndropdown.dto';

export class UpdateDefaultcolumndropdownDto extends PartialType(CreateDefaultcolumndropdownDto) {}
