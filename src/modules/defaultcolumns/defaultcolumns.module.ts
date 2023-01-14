import { Module } from '@nestjs/common';
import { DefaultcolumnsService } from './defaultcolumns.service';
import { DefaultcolumnsController } from './defaultcolumns.controller';
import { defaultColumnsProviders } from './defaultcolumns.provider';
import { defaultColumnDropdownProviders } from '../defaultcolumndropdowns/defaultcolumndropdowns.provider';
import { defaultColumnPeopleProviders } from '../defaultcolumnpeople/defaultcolumnpeople.provider';
import { defaultColumnStatusProviders } from '../defaultcolumnstatuses/defaultcolumnstatuses.provider';

@Module({
  controllers: [DefaultcolumnsController],
  providers: [DefaultcolumnsService, ...defaultColumnsProviders,...defaultColumnDropdownProviders,...defaultColumnPeopleProviders, ...defaultColumnStatusProviders]
})
export class DefaultcolumnsModule {}
