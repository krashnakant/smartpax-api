import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnvalueDto } from './create-columnvalue.dto';

export class UpdateColumnvalueDto extends PartialType(CreateColumnvalueDto) {}
