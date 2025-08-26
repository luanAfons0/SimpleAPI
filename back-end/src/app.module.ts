import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ClientModule } from './client/client.module';
import { HealthModule } from './health/health.module';
import { databaseConfig } from './database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRoot(databaseConfig),
    HealthModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
