import { Injectable, Inject } from '@nestjs/common';
import { PERMISSION_REPOSITORY } from 'src/core/constants';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {

  constructor(@Inject(PERMISSION_REPOSITORY) private readonly permissionRepository: typeof Permission) { }

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return await this.permissionRepository.create<Permission>(createPermissionDto);
  }

  async findAll(): Promise<Permission[]> {
    return await this.permissionRepository.findAll<Permission>({ where: { delete_status:false } });
  }
  

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return await this.permissionRepository.update<Permission>(updatePermissionDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.permissionRepository.update<Permission>(data, {where: {id}});
    // return await this.permissionRepository.destroy({where: {id}})
  } 
}
