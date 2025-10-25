import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ClientModule } from './client/client.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { AddressesModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MikroOrmModule.forRoot(),
    HealthModule,
    ClientModule,
    AddressesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
