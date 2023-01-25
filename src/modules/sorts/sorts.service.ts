import { Injectable, Inject } from '@nestjs/common';
import { SORT_REPOSITORY } from 'src/core/constants';
import { CreateSortDto } from './dto/create-sort.dto';
import { UpdateSortDto } from './dto/update-sort.dto';
import { Sort } from './entities/sort.entity';

@Injectable()
export class SortService {

  constructor(@Inject(SORT_REPOSITORY) private readonly sortRepository: typeof Sort) { }

  async create(createSortDto: CreateSortDto): Promise<Sort> {
    return await this.sortRepository.create<Sort>(createSortDto);
  }

  async findAll(): Promise<Sort[]> {
    return await this.sortRepository.findAll<Sort>();
  }


  findOne(id: number) {
    return `This action returns a #${id} sort`;
  }

  async update(id: number, updateSortDto: UpdateSortDto) {
    return await this.sortRepository.update<Sort>(updateSortDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.sortRepository.destroy({where: {id}})
  }
}
