import { PartialType } from '@nestjs/mapped-types';
import { CreateDropdownDto } from './create-dropdown.dto';

export class UpdateDropdownDto extends PartialType(CreateDropdownDto) {}
