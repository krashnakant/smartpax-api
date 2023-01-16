import { Module } from '@nestjs/common';
import { SortService } from './sorts.service';
import { SortController } from './sorts.controller';
import { sortProviders } from './sorts.provider';

@Module({
  controllers: [SortController],
  providers: [SortService, ...sortProviders]
})
export class SortModule {}
