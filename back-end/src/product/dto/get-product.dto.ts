import { Product } from '../../entities/product.entity';

export class GetProductDto {
  public readonly sku: string;
  public readonly name: string;
  public readonly imageUrl: string;
  public readonly description: string;
  public readonly stock: number;
  public readonly price: number;

  constructor({
      sku,
      name,
      imageUrl,
      description,
      stock,
      price
  }: Pick<
    Product,
    'sku' | 'name' | 'imageUrl' | 'description' | 'stock' | 'price'
  >) {
    this.sku = sku;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.stock = stock;
    this.price = price;
  }
}
