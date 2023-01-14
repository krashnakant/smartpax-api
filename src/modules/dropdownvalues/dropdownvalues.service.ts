import { Injectable,Inject } from '@nestjs/common';
import { DROPDOWNVALUES_REPOSITORY, DROPDOWN_REPOSITORY } from 'src/core/constants';
import { Dropdown } from '../dropdowns/entities/dropdown.entity';
import { CreateDropdownvalueDto } from './dto/create-dropdownvalue.dto';
import { UpdateDropdownvalueDto } from './dto/update-dropdownvalue.dto';
import { Dropdownvalue } from './entities/dropdownvalue.entity';

@Injectable()
export class DropdownvaluesService {

  constructor(
    @Inject(DROPDOWNVALUES_REPOSITORY) private readonly dropdownvalueRepository: typeof Dropdownvalue,
    @Inject(DROPDOWN_REPOSITORY) private readonly dropdownRepository: typeof Dropdown
  ) { }

  async create(createDropdownvalueDto: CreateDropdownvalueDto): Promise<Dropdownvalue> {
    return await this.dropdownvalueRepository.create<Dropdownvalue>(createDropdownvalueDto);
  }

  async findOneById(id: number): Promise<Dropdownvalue> {
    return await this.dropdownvalueRepository.findOne<Dropdownvalue>({ where: { id }, include:[this.dropdownRepository] });
  }

  async findAll(): Promise<Dropdownvalue[]> {
    return await this.dropdownvalueRepository.findAll<Dropdownvalue>({include:[this.dropdownRepository]});
  }

  async findAllByDropdownId(dropdown_id: number): Promise<Dropdownvalue[]> {
    return await this.dropdownvalueRepository.findAll<Dropdownvalue>({ where: { dropdown_id }, include:[this.dropdownRepository] });
  }  

  findOne(id: number) {
    return `This action returns a #${id} dropdownvalue`;
  }

  update(id: number, updateDropdownvalueDto: UpdateDropdownvalueDto) {
    return `This action updates a #${id} dropdownvalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} dropdownvalue`;
  }
}
