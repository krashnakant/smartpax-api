import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnpeopleDto } from './create-columnpeople.dto';

export class UpdateColumnpeopleDto extends PartialType(CreateColumnpeopleDto) {}
