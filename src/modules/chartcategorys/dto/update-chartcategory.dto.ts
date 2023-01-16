import { PartialType } from '@nestjs/mapped-types';
import { CreateChartcategoryDto } from './create-chartcategory.dto';

export class UpdateChartcategoryDto extends PartialType(CreateChartcategoryDto) {}
