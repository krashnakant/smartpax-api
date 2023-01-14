import { Module } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { DropdownsController } from './dropdowns.controller';
import { dropdownsProviders } from './dropdowns.provider';

@Module({
  controllers: [DropdownsController],
  providers: [DropdownsService,...dropdownsProviders]
})
export class DropdownsModule {}
