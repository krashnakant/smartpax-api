import { Injectable } from '@nestjs/common';
import { CreateColumnpersonDto } from './dto/create-columnperson.dto';
import { UpdateColumnpersonDto } from './dto/update-columnperson.dto';

@Injectable()
export class ColumnpeopleService {
  create(createColumnpersonDto: CreateColumnpersonDto) {
    return 'This action adds a new columnperson';
  }

  findAll() {
    return `This action returns all columnpeople`;
  }

  findOne(id: number) {
    return `This action returns a #${id} columnperson`;
  }

  update(id: number, updateColumnpersonDto: UpdateColumnpersonDto) {
    return `This action updates a #${id} columnperson`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnperson`;
  }
}
