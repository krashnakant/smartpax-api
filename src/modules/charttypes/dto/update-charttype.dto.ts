import { PartialType } from '@nestjs/mapped-types';
import { CreateCharttypeDto } from './create-charttype.dto';

export class UpdateCharttypeDto extends PartialType(CreateCharttypeDto) {}
