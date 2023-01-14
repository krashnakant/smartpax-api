import { Module } from '@nestjs/common';
import { ColumnpeopleService } from './columnpeople.service';
import { ColumnpeopleController } from './columnpeople.controller';

@Module({
  controllers: [ColumnpeopleController],
  providers: [ColumnpeopleService]
})
export class ColumnpeopleModule {}
