import { Injectable } from '@nestjs/common';
import { CreateColumnvalueDto } from './dto/create-columnvalue.dto';
import { UpdateColumnvalueDto } from './dto/update-columnvalue.dto';

@Injectable()
export class ColumnvaluesService {
  create(createColumnvalueDto: CreateColumnvalueDto) {
    return 'This action adds a new columnvalue';
  }

  findAll() {
    return `This action returns all columnvalues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} columnvalue`;
  }

  update(id: number, updateColumnvalueDto: UpdateColumnvalueDto) {
    return `This action updates a #${id} columnvalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnvalue`;
  }
}
