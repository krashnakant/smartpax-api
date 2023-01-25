import { Injectable, Inject } from '@nestjs/common';
import { FILTER_REPOSITORY } from 'src/core/constants';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { Filter } from './entities/filter.entity';

@Injectable()
export class FiltersService {

  constructor(@Inject(FILTER_REPOSITORY) private readonly filterRepository: typeof Filter) { }

  async create(createFilterDto: CreateFilterDto): Promise<Filter> {
    return await this.filterRepository.create<Filter>(createFilterDto);
  }

  async findAll(): Promise<Filter[]> {
    return await this.filterRepository.findAll<Filter>({where: {delete_status:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} filter`;
  }

  async update(id: number, updateFilterDto: UpdateFilterDto) {
    return await this.filterRepository.update<Filter>(updateFilterDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.filterRepository.update<Filter>(data, {where: {id}});
    // return await this.filterRepository.destroy({where: {id}})
  }
}
