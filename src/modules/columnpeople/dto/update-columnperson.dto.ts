import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnpersonDto } from './create-columnperson.dto';

export class UpdateColumnpersonDto extends PartialType(CreateColumnpersonDto) {}
