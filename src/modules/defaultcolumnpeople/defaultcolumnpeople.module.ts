import { Module } from '@nestjs/common';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';
import { DefaultcolumnpeopleController } from './defaultcolumnpeople.controller';
import { defaultColumnPeopleProviders } from './defaultcolumnpeople.provider';

@Module({
  controllers: [DefaultcolumnpeopleController],
  providers: [DefaultcolumnpeopleService, ...defaultColumnPeopleProviders]
})
export class DefaultcolumnpeopleModule {}
