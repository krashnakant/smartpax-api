import { Module } from '@nestjs/common';
import { ColumndropdownsService } from './columndropdowns.service';
import { ColumndropdownsController } from './columndropdowns.controller';

@Module({
  controllers: [ColumndropdownsController],
  providers: [ColumndropdownsService]
})
export class ColumndropdownsModule {}
