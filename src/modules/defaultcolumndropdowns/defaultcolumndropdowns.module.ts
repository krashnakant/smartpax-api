import { Module } from '@nestjs/common';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';
import { DefaultcolumndropdownsController } from './defaultcolumndropdowns.controller';
import { defaultColumnDropdownProviders } from './defaultcolumndropdowns.provider';

@Module({
  controllers: [DefaultcolumndropdownsController],
  providers: [DefaultcolumndropdownsService, ...defaultColumnDropdownProviders]
})
export class DefaultcolumndropdownsModule {}
