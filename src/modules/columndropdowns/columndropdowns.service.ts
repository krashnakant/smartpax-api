import { Injectable } from '@nestjs/common';
import { CreateColumndropdownDto } from './dto/create-columndropdown.dto';
import { UpdateColumndropdownDto } from './dto/update-columndropdown.dto';

@Injectable()
export class ColumndropdownsService {
  create(createColumndropdownDto: CreateColumndropdownDto) {
    return 'This action adds a new columndropdown';
  }

  findAll() {
    return `This action returns all columndropdowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} columndropdown`;
  }

  update(id: number, updateColumndropdownDto: UpdateColumndropdownDto) {
    return `This action updates a #${id} columndropdown`;
  }

  remove(id: number) {
    return `This action removes a #${id} columndropdown`;
  }
}
