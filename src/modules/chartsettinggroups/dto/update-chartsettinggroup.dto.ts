import { PartialType } from '@nestjs/mapped-types';
import { CreateChartsettinggroupDto } from './create-chartsettinggroup.dto';

export class UpdateChartsettinggroupDto extends PartialType(CreateChartsettinggroupDto) {}
