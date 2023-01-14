import { Injectable } from '@nestjs/common';
import { CreateStatusvalueDto } from './dto/create-statusvalue.dto';
import { UpdateStatusvalueDto } from './dto/update-statusvalue.dto';

@Injectable()
export class StatusvaluesService {
  create(createStatusvalueDto: CreateStatusvalueDto) {
    return 'This action adds a new statusvalue';
  }

  findAll() {
    return `This action returns all statusvalues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statusvalue`;
  }

  update(id: number, updateStatusvalueDto: UpdateStatusvalueDto) {
    return `This action updates a #${id} statusvalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusvalue`;
  }
}
