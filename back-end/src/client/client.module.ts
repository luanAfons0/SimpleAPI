import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { ClientController } from './controllers/client.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Client } from './entities/client.entity';
import { SecurityModule } from 'src/security/sercurity.module';
import { BcryptService } from 'src/security/services/bcrypt.service';

@Module({
  imports: [MikroOrmModule.forFeature([Client]), SecurityModule],
  controllers: [ClientController],
  providers: [ClientService, BcryptService],
})
export class ClientModule {}
