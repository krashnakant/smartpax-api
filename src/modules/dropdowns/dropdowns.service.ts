import { Injectable,Inject } from '@nestjs/common';
import { DROPDOWNVALUES_REPOSITORY, DROPDOWN_REPOSITORY } from 'src/core/constants';
import { Dropdownvalue } from '../dropdownvalues/entities/dropdownvalue.entity';
import { CreateDropdownDto } from './dto/create-dropdown.dto';
import { UpdateDropdownDto } from './dto/update-dropdown.dto';
import { Dropdown } from './entities/dropdown.entity';

@Injectable()
export class DropdownsService {

  constructor(
    @Inject(DROPDOWN_REPOSITORY) private readonly dropdownRepository: typeof Dropdown,
    @Inject(DROPDOWNVALUES_REPOSITORY) private readonly dropdownvalueRepository: typeof Dropdownvalue
  ) { }

  async create(createDropdownDto: CreateDropdownDto): Promise<Dropdown> {
    return await this.dropdownRepository.create<Dropdown>(createDropdownDto);
  }

  async findOneById(id: number): Promise<Dropdown> {
    return await this.dropdownRepository.findOne<Dropdown>({ where: { id, delete_status: false }, include:[this.dropdownvalueRepository] });
  }

  async findAll(): Promise<Dropdown[]> {
    return await this.dropdownRepository.findAll<Dropdown>({where: { delete_status: false }, include:[this.dropdownvalueRepository]});
  }

  findOne(id: number) {
    return `This action returns a #${id} dropdown`;
  }

  async update(id: number, updateDropdownDto: UpdateDropdownDto) {
    return await this.dropdownRepository.update<Dropdown>(updateDropdownDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.dropdownRepository.update<Dropdown>(data, {where: {id}});
    // return await this.dropdownRepository.destroy({where: {id}})
  }
}
