import { Injectable,Inject } from '@nestjs/common';
import { STATUSVALUE_REPOSITORY, STATUS_REPOSITORY } from 'src/core/constants';
import { Statusvalue } from '../statusvalues/entities/statusvalue.entity';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusesService {

  constructor(
    @Inject(STATUS_REPOSITORY) private readonly statusRepository: typeof Status,
    @Inject(STATUSVALUE_REPOSITORY) private readonly statusvalueRepository: typeof Statusvalue
  ) { }

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    return await this.statusRepository.create<Status>(createStatusDto);
  }

  async findOneById(id: number): Promise<Status> {
    return await this.statusRepository.findOne<Status>({ where: { id }, include:[this.statusvalueRepository] });
  }

  async findAll(): Promise<Status[]> {
    return await this.statusRepository.findAll<Status>({include:[this.statusvalueRepository]});
  }



  findOne(id: number) {
    return `This action returns a #${id} status`;
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
