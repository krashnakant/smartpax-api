import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumnpersonDto } from './dto/create-defaultcolumnperson.dto';
import { UpdateDefaultcolumnpersonDto } from './dto/update-defaultcolumnperson.dto';
import { Defaultcolumnperson } from './entities/defaultcolumnperson.entity';

@Injectable()
export class DefaultcolumnpeopleService {

  constructor(@Inject(DEFAULTCOLUMNPEOPLE_REPOSITORY) private readonly defaultcolumnpersonRepository: typeof Defaultcolumnperson) { }

  async create(createDefaultcolumnpersonDto: CreateDefaultcolumnpersonDto): Promise<Defaultcolumnperson> {
    return await this.defaultcolumnpersonRepository.create<Defaultcolumnperson>(createDefaultcolumnpersonDto);
  }

  async findAll(): Promise<Defaultcolumnperson[]> {
    return await this.defaultcolumnpersonRepository.findAll<Defaultcolumnperson>({where: {delete_status:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumnperson`;
  }

  async update(id: number, updateDefaultcolumnpersonDto: UpdateDefaultcolumnpersonDto) {
    return await this.defaultcolumnpersonRepository.update<Defaultcolumnperson>(updateDefaultcolumnpersonDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.defaultcolumnpersonRepository.update<Defaultcolumnperson>(data, {where: {id}});
    // return await this.defaultcolumnpersonRepository.destroy({where: {id}})
  }  
}
