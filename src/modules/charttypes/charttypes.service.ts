import { Injectable } from '@nestjs/common';
import { CreateCharttypeDto } from './dto/create-charttype.dto';
import { UpdateCharttypeDto } from './dto/update-charttype.dto';

@Injectable()
export class CharttypesService {
  create(createCharttypeDto: CreateCharttypeDto) {
    return 'This action adds a new charttype';
  }

  findAll() {
    return `This action returns all charttypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charttype`;
  }

  update(id: number, updateCharttypeDto: UpdateCharttypeDto) {
    return `This action updates a #${id} charttype`;
  }

  remove(id: number) {
    return `This action removes a #${id} charttype`;
  }
}
