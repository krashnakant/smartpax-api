import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnpeopleDto } from './create-columnperson.dto';

export class UpdateColumnpeopleDto extends PartialType(CreateColumnpeopleDto) {}
