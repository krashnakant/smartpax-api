import { Injectable, Inject } from '@nestjs/common';
import { STATUSVALUE_REPOSITORY } from 'src/core/constants';
import { CreateStatusvalueDto } from './dto/create-statusvalue.dto';
import { UpdateStatusvalueDto } from './dto/update-statusvalue.dto';
import { Statusvalue } from './entities/statusvalue.entity';

@Injectable()
export class StatusvaluesService {

  constructor(@Inject(STATUSVALUE_REPOSITORY) private readonly statusvalueRepository: typeof Statusvalue) { }

  async create(createStatusvalueDto: CreateStatusvalueDto): Promise<Statusvalue> {
    return await this.statusvalueRepository.create<Statusvalue>(createStatusvalueDto);
  }

  async findOneById(id: number): Promise<Statusvalue> {
    return await this.statusvalueRepository.findOne<Statusvalue>({ where: { id } });
  }

  async findAll(): Promise<Statusvalue[]> {
    return await this.statusvalueRepository.findAll<Statusvalue>();
  }

  async findAllByStatusId(status_id: number): Promise<Statusvalue[]> {
    return await this.statusvalueRepository.findAll<Statusvalue>({ where: { status_id } });
  }  

  findOne(id: number) {
    return `This action returns a #${id} statusvalue`;
  }

  async update(id: number, updateStatusvalueDto: UpdateStatusvalueDto) {
    return await this.statusvalueRepository.update<Statusvalue>(updateStatusvalueDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.statusvalueRepository.destroy({where: {id}})
  }
}
