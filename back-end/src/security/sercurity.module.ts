import { Module } from '@nestjs/common';
import { BcryptService } from './services/bcrypt.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BcryptService],
})
export class SecurityModule {}
