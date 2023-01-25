import { Injectable, Inject } from '@nestjs/common';
import { COLUMNDROPDOWN_REPOSITORY } from 'src/core/constants';
import { CreateColumndropdownDto } from './dto/create-columndropdown.dto';
import { UpdateColumndropdownDto } from './dto/update-columndropdown.dto';
import { Columndropdown } from './entities/columndropdown.entity';

@Injectable()
export class ColumndropdownsService {

  constructor(@Inject(COLUMNDROPDOWN_REPOSITORY) private readonly columndropdownRepository: typeof Columndropdown) { }

  async create(createColumndropdownDto: CreateColumndropdownDto): Promise<Columndropdown> {
    return await this.columndropdownRepository.create<Columndropdown>(createColumndropdownDto);
  }

  async findAll(): Promise<Columndropdown[]> {
    return await this.columndropdownRepository.findAll<Columndropdown>({where: {delete_status:false}});
  }


  findOne(id: number) {
    return `This action returns a #${id} columndropdown`;
  }

  async update(id: number, updateColumndropdownDto: UpdateColumndropdownDto) {
    return await this.columndropdownRepository.update<Columndropdown>(updateColumndropdownDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.columndropdownRepository.update<Columndropdown>(data, {where: {id}});
    // return await this.columndropdownRepository.destroy({where: {id}})
  }  
}
