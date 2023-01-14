import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusvalueDto } from './create-statusvalue.dto';

export class UpdateStatusvalueDto extends PartialType(CreateStatusvalueDto) {}
