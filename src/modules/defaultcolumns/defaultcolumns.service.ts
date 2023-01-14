import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMN_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumnDto } from './dto/create-defaultcolumn.dto';
import { UpdateDefaultcolumnDto } from './dto/update-defaultcolumn.dto';
import { Defaultcolumn } from './entities/defaultcolumn.entity';

@Injectable()
export class DefaultcolumnsService {

  constructor(@Inject(DEFAULTCOLUMN_REPOSITORY) private readonly defaultColumnRepository: typeof Defaultcolumn) { }

  async create(createDefaultcolumnDto: CreateDefaultcolumnDto): Promise<Defaultcolumn> {
    return await this.defaultColumnRepository.create<Defaultcolumn>(createDefaultcolumnDto);
  }

  findAll() {
    return `This action returns all defaultcolumns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumn`;
  }

  update(id: number, updateDefaultcolumnDto: UpdateDefaultcolumnDto) {
    return `This action updates a #${id} defaultcolumn`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumn`;
  }
}
