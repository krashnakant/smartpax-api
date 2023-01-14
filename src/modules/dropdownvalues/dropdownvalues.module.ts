import { Module } from '@nestjs/common';
import { DropdownvaluesService } from './dropdownvalues.service';
import { DropdownvaluesController } from './dropdownvalues.controller';
import { dropdownvaluesProviders } from './dropdownvalues.provider';

@Module({
  controllers: [DropdownvaluesController],
  providers: [DropdownvaluesService,...dropdownvaluesProviders]
})
export class DropdownvaluesModule {}
