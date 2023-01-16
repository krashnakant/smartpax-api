import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { permissionsProviders } from './permissions.provider';

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService, ...permissionsProviders]
})
export class PermissionsModule {}
