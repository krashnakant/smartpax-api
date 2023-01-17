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
    return await this.filterRepository.findAll<Filter>();
  }

  findOne(id: number) {
    return `This action returns a #${id} filter`;
  }

  update(id: number, updateFilterDto: UpdateFilterDto) {
    return `This action updates a #${id} filter`;
  }

  remove(id: number) {
    return `This action removes a #${id} filter`;
  }
}
