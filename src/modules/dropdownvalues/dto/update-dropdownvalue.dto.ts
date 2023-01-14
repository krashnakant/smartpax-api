import { PartialType } from '@nestjs/mapped-types';
import { CreateDropdownvalueDto } from './create-dropdownvalue.dto';

export class UpdateDropdownvalueDto extends PartialType(CreateDropdownvalueDto) {}
