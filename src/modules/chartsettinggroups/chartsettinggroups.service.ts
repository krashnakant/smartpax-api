import { Injectable } from '@nestjs/common';
import { CreateChartsettinggroupDto } from './dto/create-chartsettinggroup.dto';
import { UpdateChartsettinggroupDto } from './dto/update-chartsettinggroup.dto';

@Injectable()
export class ChartsettinggroupsService {
  create(createChartsettinggroupDto: CreateChartsettinggroupDto) {
    return 'This action adds a new chartsettinggroup';
  }

  findAll() {
    return `This action returns all chartsettinggroups`;
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
