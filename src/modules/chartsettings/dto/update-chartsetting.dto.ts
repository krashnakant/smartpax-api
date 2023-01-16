import { PartialType } from '@nestjs/mapped-types';
import { CreateChartsettingDto } from './create-chartsetting.dto';

export class UpdateChartsettingDto extends PartialType(CreateChartsettingDto) {}
