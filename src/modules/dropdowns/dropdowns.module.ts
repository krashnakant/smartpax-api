import { Module } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { DropdownsController } from './dropdowns.controller';
import { dropdownsProviders } from './dropdowns.provider';
import { dropdownvaluesProviders } from '../dropdownvalues/dropdownvalues.provider';

@Module({
  controllers: [DropdownsController],
  providers: [DropdownsService,...dropdownsProviders,...dropdownvaluesProviders]
})
export class DropdownsModule {}
