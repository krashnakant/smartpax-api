import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumnpersonDto } from './dto/create-defaultcolumnperson.dto';
import { UpdateDefaultcolumnpersonDto } from './dto/update-defaultcolumnperson.dto';
import { Defaultcolumnperson } from './entities/defaultcolumnperson.entity';

@Injectable()
export class DefaultcolumnpeopleService {

  constructor(@Inject(DEFAULTCOLUMNPEOPLE_REPOSITORY) private readonly defaultcolumnpersonRepository: typeof Defaultcolumnperson) { }

  async create(createDefaultcolumnpersonDto: CreateDefaultcolumnpersonDto): Promise<Defaultcolumnperson> {
    return await this.defaultcolumnpersonRepository.create<Defaultcolumnperson>(createDefaultcolumnpersonDto);
  }

  async findAll(): Promise<Defaultcolumnperson[]> {
    return await this.defaultcolumnpersonRepository.findAll<Defaultcolumnperson>();
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