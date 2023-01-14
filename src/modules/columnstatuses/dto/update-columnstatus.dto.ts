import { PartialType } from '@nestjs/mapped-types';
import { CreateColumnstatusDto } from './create-columnstatus.dto';

export class UpdateColumnstatusDto extends PartialType(CreateColumnstatusDto) {}
