import { Injectable } from '@nestjs/common';
import { CreateDefaultcolumndropdownDto } from './dto/create-defaultcolumndropdown.dto';
import { UpdateDefaultcolumndropdownDto } from './dto/update-defaultcolumndropdown.dto';

@Injectable()
export class DefaultcolumndropdownsService {
  create(createDefaultcolumndropdownDto: CreateDefaultcolumndropdownDto) {
    return 'This action adds a new defaultcolumndropdown';
  }

  findAll() {
    return `This action returns all defaultcolumndropdowns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumndropdown`;
  }

  update(id: number, updateDefaultcolumndropdownDto: UpdateDefaultcolumndropdownDto) {
    return `This action updates a #${id} defaultcolumndropdown`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumndropdown`;
  }
}
