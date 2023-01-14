import { Injectable } from '@nestjs/common';
import { CreateColumnstatusDto } from './dto/create-columnstatus.dto';
import { UpdateColumnstatusDto } from './dto/update-columnstatus.dto';

@Injectable()
export class ColumnstatusesService {
  create(createColumnstatusDto: CreateColumnstatusDto) {
    return 'This action adds a new columnstatus';
  }

  findAll() {
    return `This action returns all columnstatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} columnstatus`;
  }

  update(id: number, updateColumnstatusDto: UpdateColumnstatusDto) {
    return `This action updates a #${id} columnstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnstatus`;
  }
}
