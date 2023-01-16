import { Injectable } from '@nestjs/common';
import { CreateChartsettingDto } from './dto/create-chartsetting.dto';
import { UpdateChartsettingDto } from './dto/update-chartsetting.dto';

@Injectable()
export class ChartsettingsService {
  create(createChartsettingDto: CreateChartsettingDto) {
    return 'This action adds a new chartsetting';
  }

  findAll() {
    return `This action returns all chartsettings`;
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
