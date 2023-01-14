import { PartialType } from '@nestjs/mapped-types';
import { CreateDefaultcolumnpersonDto } from './create-defaultcolumnperson.dto';

export class UpdateDefaultcolumnpersonDto extends PartialType(CreateDefaultcolumnpersonDto) {}
