import { Injectable } from '@nestjs/common';
import { CreateSortDto } from './dto/create-sort.dto';
import { UpdateSortDto } from './dto/update-sort.dto';

@Injectable()
export class SortService {
  create(createSortDto: CreateSortDto) {
    return 'This action adds a new sort';
  }

  findAll() {
    return `This action returns all sort`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sort`;
  }

  update(id: number, updateSortDto: UpdateSortDto) {
    return `This action updates a #${id} sort`;
  }

  remove(id: number) {
    return `This action removes a #${id} sort`;
  }
}
