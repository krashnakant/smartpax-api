import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNDROPDOWN_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumndropdownDto } from './dto/create-defaultcolumndropdown.dto';
import { UpdateDefaultcolumndropdownDto } from './dto/update-defaultcolumndropdown.dto';
import { Defaultcolumndropdown } from './entities/defaultcolumndropdown.entity';

@Injectable()
export class DefaultcolumndropdownsService {

  constructor(@Inject(DEFAULTCOLUMNDROPDOWN_REPOSITORY) private readonly defaultcolumndropdownRepository: typeof Defaultcolumndropdown) { }

  async create(createDefaultcolumndropdownDto: CreateDefaultcolumndropdownDto): Promise<Defaultcolumndropdown> {
    return await this.defaultcolumndropdownRepository.create<Defaultcolumndropdown>(createDefaultcolumndropdownDto);
  }

  async findAll(): Promise<Defaultcolumndropdown[]> {
    return await this.defaultcolumndropdownRepository.findAll<Defaultcolumndropdown>();
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumndropdown`;
  }

  update(id: number, updateDefaultcolumndropdownDto: UpdateDefaultcolumndropdownDto) {
    return `This action updates a #${id} defaultcolumndropdown`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumndropdown`;
  }
}
