import { Module } from '@nestjs/common';
import { DropdownvaluesService } from './dropdownvalues.service';
import { DropdownvaluesController } from './dropdownvalues.controller';
import { dropdownvaluesProviders } from './dropdownvalues.provider';
import { dropdownsProviders } from '../dropdowns/dropdowns.provider';

@Module({
  controllers: [DropdownvaluesController],
  providers: [DropdownvaluesService,...dropdownvaluesProviders,...dropdownsProviders]
})
export class DropdownvaluesModule {}
