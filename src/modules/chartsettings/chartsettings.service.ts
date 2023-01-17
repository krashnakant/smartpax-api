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
    return await this.chartsettingRepository.findAll<Chartsetting>();
  }


  findOne(id: number) {
    return `This action returns a #${id} chartsetting`;
  }

  update(id: number, updateChartsettingDto: UpdateChartsettingDto) {
    return `This action updates a #${id} chartsetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartsetting`;
  }
}
