import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
