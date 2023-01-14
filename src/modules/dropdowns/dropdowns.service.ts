import { Injectable } from '@nestjs/common';
import { CreateDropdownDto } from './dto/create-dropdown.dto';
import { UpdateDropdownDto } from './dto/update-dropdown.dto';

@Injectable()
export class DropdownsService {
  create(createDropdownDto: CreateDropdownDto) {
    return 'This action adds a new dropdown';
  }

  findAll() {
    return `This action returns all dropdowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dropdown`;
  }

  update(id: number, updateDropdownDto: UpdateDropdownDto) {
    return `This action updates a #${id} dropdown`;
  }

  remove(id: number) {
    return `This action removes a #${id} dropdown`;
  }
}
