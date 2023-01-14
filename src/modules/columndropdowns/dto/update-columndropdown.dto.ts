import { PartialType } from '@nestjs/mapped-types';
import { CreateColumndropdownDto } from './create-columndropdown.dto';

export class UpdateColumndropdownDto extends PartialType(CreateColumndropdownDto) {}
