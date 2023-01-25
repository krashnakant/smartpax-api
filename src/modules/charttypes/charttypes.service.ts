import { Injectable, Inject } from '@nestjs/common';
import { CHARTTYPE_REPOSITORY } from 'src/core/constants';
import { CreateCharttypeDto } from './dto/create-charttype.dto';
import { UpdateCharttypeDto } from './dto/update-charttype.dto';
import { ChartType } from './entities/charttype.entity';

@Injectable()
export class CharttypesService {

  constructor(@Inject(CHARTTYPE_REPOSITORY) private readonly charttypeRepository: typeof ChartType) { }

  async create(createCharttypeDto: CreateCharttypeDto): Promise<ChartType> {
    return await this.charttypeRepository.create<ChartType>(createCharttypeDto);
  }

  async findAll(): Promise<ChartType[]> {
    return await this.charttypeRepository.findAll<ChartType>();
  }


  findOne(id: number) {
    return `This action returns a #${id} charttype`;
  }

  async update(id: number, updateCharttypeDto: UpdateCharttypeDto) {
    return await this.charttypeRepository.update<ChartType>(updateCharttypeDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.charttypeRepository.destroy({where: {id}})
  }  
}
