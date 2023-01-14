import { Injectable } from '@nestjs/common';
import { CreateDropdownvalueDto } from './dto/create-dropdownvalue.dto';
import { UpdateDropdownvalueDto } from './dto/update-dropdownvalue.dto';

@Injectable()
export class DropdownvaluesService {
  create(createDropdownvalueDto: CreateDropdownvalueDto) {
    return 'This action adds a new dropdownvalue';
  }

  findAll() {
    return `This action returns all dropdownvalues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dropdownvalue`;
  }

  update(id: number, updateDropdownvalueDto: UpdateDropdownvalueDto) {
    return `This action updates a #${id} dropdownvalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} dropdownvalue`;
  }
}
