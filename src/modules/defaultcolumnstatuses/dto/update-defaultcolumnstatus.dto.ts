import { PartialType } from '@nestjs/mapped-types';
import { CreateDefaultcolumnstatusDto } from './create-defaultcolumnstatus.dto';

export class UpdateDefaultcolumnstatusDto extends PartialType(CreateDefaultcolumnstatusDto) {}
