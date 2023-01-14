import { Module } from '@nestjs/common';
import { DefaultcolumnsService } from './defaultcolumns.service';
import { DefaultcolumnsController } from './defaultcolumns.controller';
import { defaultColumnsProviders } from './defaultcolumns.provider';

@Module({
  controllers: [DefaultcolumnsController],
  providers: [DefaultcolumnsService, ...defaultColumnsProviders]
})
export class DefaultcolumnsModule {}
