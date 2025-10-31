import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { EntityRepository } from '@mikro-orm/core';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { GetProductDto } from '../dto/get-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: EntityRepository<Product>,
  ) { }
  
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create({
      ...createProductDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const em = this.productRepository.getEntityManager();
    em.persist(newProduct);
    await em.flush();

    return { message: 'Product created successfully' };
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['sku', 'name', 'imageUrl', 'description', 'stock', 'price'] }
    );

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    var getProductDto = new GetProductDto(product);

    return getProductDto;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne(
      { id: id },
      { fields: ['sku', 'name', 'imageUrl', 'description', 'stock', 'price'] }
    );

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    ['sku', 'name', 'imageUrl', 'description', 'stock', 'price'].map(
      (value) => {
        if (updateProductDto[value]) product[value] = updateProductDto[value];
      },
    );

    const em = this.productRepository.getEntityManager();
    await em.flush();

    return {
      message: 'Product updated successfully',
    };
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne(
      { id: id, deletedAt: null },
      { fields: ['id', 'deletedAt'] }
    );

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    product.deletedAt = new Date();

    const em = this.productRepository.getEntityManager();
    await em.flush();

    return { message: 'Product deleted successfully' };
  }
}
