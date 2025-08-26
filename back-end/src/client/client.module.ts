import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controllers/client.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Client } from './entities/client.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
