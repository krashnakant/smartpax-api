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
    return await this.rowRepository.findOne<Row>({ where: { id } });
  }

  async findAllByGroupId(group_id: number): Promise<Row[]> {
    return await this.rowRepository.findAll<Row>({where: { group_id }});
  }

  async findAll(): Promise<Row[]> {
    return await this.rowRepository.findAll<Row>();
  }

  findOne(id: number) {
    return `This action returns a #${id} row`;
  }

  update(id: number, updateRowDto: UpdateRowDto) {
    return `This action updates a #${id} row`;
  }

  remove(id: number) {
    return `This action removes a #${id} row`;
  }
}
