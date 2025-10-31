import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Product } from 'src/entities/product.entity';
import { SecurityModule } from 'src/security/sercurity.module';

@Module({
  imports: [MikroOrmModule.forFeature([Product]), SecurityModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
