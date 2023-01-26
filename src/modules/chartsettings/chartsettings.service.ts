import { Injectable, Inject } from '@nestjs/common';
import { CHARTSETTING_REPOSITORY } from 'src/core/constants';
import { CreateChartsettingDto } from './dto/create-chartsetting.dto';
import { UpdateChartsettingDto } from './dto/update-chartsetting.dto';
import { Chartsetting } from './entities/chartsetting.entity';

@Injectable()
export class ChartsettingsService {

  constructor(@Inject(CHARTSETTING_REPOSITORY) private readonly chartsettingRepository: typeof Chartsetting) { }

  async create(createChartsettingDto: CreateChartsettingDto): Promise<Chartsetting> {
    return await this.chartsettingRepository.create<Chartsetting>(createChartsettingDto);
  }

  async findAll(): Promise<Chartsetting[]> {
    return await this.chartsettingRepository.findAll<Chartsetting>({where: {delete_status:false}});
  }


  findOne(id: number) {
    return `This action returns a #${id} chartsetting`;
  }

  async update(id: number, updateChartsettingDto: UpdateChartsettingDto) {
    return await this.chartsettingRepository.update<Chartsetting>(updateChartsettingDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.chartsettingRepository.update<Chartsetting>(data, {where: {id}});
    // return await this.chartsettingRepository.destroy({where: {id}})
  }  
}
