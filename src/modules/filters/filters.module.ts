import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { filtersProviders } from './filters.provider';

@Module({
  controllers: [FiltersController],
  providers: [FiltersService, ...filtersProviders]
})
export class FiltersModule {}
