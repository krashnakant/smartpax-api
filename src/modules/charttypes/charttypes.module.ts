import { Module } from '@nestjs/common';
import { CharttypesService } from './charttypes.service';
import { CharttypesController } from './charttypes.controller';
import { charttypesProviders } from './charttypes.provider';

@Module({
  controllers: [CharttypesController],
  providers: [CharttypesService, ...charttypesProviders]
})
export class CharttypesModule {}
