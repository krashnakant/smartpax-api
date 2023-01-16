import { Module } from '@nestjs/common';
import { ColumnvaluesService } from './columnvalues.service';
import { ColumnvaluesController } from './columnvalues.controller';
import { columnvaluesProviders } from './columnvalues.provider';

@Module({
  controllers: [ColumnvaluesController],
  providers: [ColumnvaluesService, ...columnvaluesProviders]
})
export class ColumnvaluesModule {}
