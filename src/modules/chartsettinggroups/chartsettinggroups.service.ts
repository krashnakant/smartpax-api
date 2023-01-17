import { Injectable, Inject } from '@nestjs/common';
import { CHARTSETTINGGROUP_REPOSITORY } from 'src/core/constants';
import { CreateChartsettinggroupDto } from './dto/create-chartsettinggroup.dto';
import { UpdateChartsettinggroupDto } from './dto/update-chartsettinggroup.dto';
import { Chartsettinggroup } from './entities/chartsettinggroup.entity';

@Injectable()
export class ChartsettinggroupsService {

  constructor(@Inject(CHARTSETTINGGROUP_REPOSITORY) private readonly chartsettinggroupRepository: typeof Chartsettinggroup) { }

  async create(createChartsettinggroupDto: CreateChartsettinggroupDto): Promise<Chartsettinggroup> {
    return await this.chartsettinggroupRepository.create<Chartsettinggroup>(createChartsettinggroupDto);
  }

  async findAll(): Promise<Chartsettinggroup[]> {
    return await this.chartsettinggroupRepository.findAll<Chartsettinggroup>();
  }


  findOne(id: number) {
    return `This action returns a #${id} chartsettinggroup`;
  }

  update(id: number, updateChartsettinggroupDto: UpdateChartsettinggroupDto) {
    return `This action updates a #${id} chartsettinggroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartsettinggroup`;
  }
}
