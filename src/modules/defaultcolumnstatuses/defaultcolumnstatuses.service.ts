import { Injectable } from '@nestjs/common';
import { CreateDefaultcolumnstatusDto } from './dto/create-defaultcolumnstatus.dto';
import { UpdateDefaultcolumnstatusDto } from './dto/update-defaultcolumnstatus.dto';

@Injectable()
export class DefaultcolumnstatusesService {
  create(createDefaultcolumnstatusDto: CreateDefaultcolumnstatusDto) {
    return 'This action adds a new defaultcolumnstatus';
  }

  findAll() {
    return `This action returns all defaultcolumnstatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumnstatus`;
  }

  update(id: number, updateDefaultcolumnstatusDto: UpdateDefaultcolumnstatusDto) {
    return `This action updates a #${id} defaultcolumnstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumnstatus`;
  }
}
