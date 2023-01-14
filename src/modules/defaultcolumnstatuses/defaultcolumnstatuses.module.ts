import { Module } from '@nestjs/common';
import { DefaultcolumnstatusesService } from './defaultcolumnstatuses.service';
import { DefaultcolumnstatusesController } from './defaultcolumnstatuses.controller';
import { defaultColumnStatusProviders } from './defaultcolumnstatuses.provider';

@Module({
  controllers: [DefaultcolumnstatusesController],
  providers: [DefaultcolumnstatusesService,...defaultColumnStatusProviders]
})
export class DefaultcolumnstatusesModule {}
