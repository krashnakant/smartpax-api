import { Injectable } from '@nestjs/common';
import { CreateDefaultcolumnpersonDto } from './dto/create-defaultcolumnperson.dto';
import { UpdateDefaultcolumnpersonDto } from './dto/update-defaultcolumnperson.dto';

@Injectable()
export class DefaultcolumnpeopleService {
  create(createDefaultcolumnpersonDto: CreateDefaultcolumnpersonDto) {
    return 'This action adds a new defaultcolumnperson';
  }

  findAll() {
    return `This action returns all defaultcolumnpeople`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumnperson`;
  }

  update(id: number, updateDefaultcolumnpersonDto: UpdateDefaultcolumnpersonDto) {
    return `This action updates a #${id} defaultcolumnperson`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumnperson`;
  }
}
