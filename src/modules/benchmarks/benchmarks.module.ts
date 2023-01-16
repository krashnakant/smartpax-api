import { Module } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';
import { BenchmarksController } from './benchmarks.controller';
import { benchmarksProviders } from './benchmarks.provider';

@Module({
  controllers: [BenchmarksController],
  providers: [BenchmarksService, ...benchmarksProviders]
})
export class BenchmarksModule {}
