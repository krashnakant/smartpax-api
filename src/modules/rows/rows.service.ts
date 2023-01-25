import { Injectable,Inject } from '@nestjs/common';
import { ROW_REPOSITORY } from 'src/core/constants';
import { CreateRowDto } from './dto/create-row.dto';
import { UpdateRowDto } from './dto/update-row.dto';
import { Row } from './entities/row.entity';

@Injectable()
export class RowsService {

  constructor(@Inject(ROW_REPOSITORY) private readonly rowRepository: typeof Row) { }

  async create(createRowDto: CreateRowDto): Promise<Row> {
    return await this.rowRepository.create<Row>(createRowDto);
  }

  async findOneById(id: number): Promise<Row> {
    return await this.rowRepository.findOne<Row>({ where: { id, delete_status:false } });
  }

  async findAllByGroupId(group_id: number): Promise<Row[]> {
    return await this.rowRepository.findAll<Row>({where: { group_id, delete_status:false }});
  }

  async findAll(): Promise<Row[]> {
    return await this.rowRepository.findAll<Row>({ where: { delete_status:false } });
  }

  findOne(id: number) {
    return `This action returns a #${id} row`;
  }

  async update(id: number, updateRowDto: UpdateRowDto) {
    return await this.rowRepository.update<Row>(updateRowDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.rowRepository.update<Row>(data, {where: {id}});
    // return await this.rowRepository.destroy({where: {id}})
  }
}
