import { Module } from '@nestjs/common';
import { ColumnpeoplesService } from './columnpeoples.service';
import { ColumnpeoplesController } from './columnpeoples.controller';
import { columnpeoplesProviders } from './columnpeoples.provider';

@Module({
  controllers: [ColumnpeoplesController],
  providers: [ColumnpeoplesService, ...columnpeoplesProviders]
})
export class ColumnpeoplesModule {}
