import { IsString, Length, IsNumber, Min, IsOptional } from 'class-validator';

export class CreateOrderProductDto {
  @IsOptional()
  @IsString()
  @Length(1, 255, {
    message: 'Extra infos length must be between 1 and 255 characters',
  })
  public readonly extraInfos?: string | null;

  @IsNumber({}, { message: 'Quantity must be a valid number' })
  @Min(1, { message: 'Quantity must be greater than or equal to 1' })
  public readonly quantity: number;

  @IsNumber({}, { message: 'Product price must be a valid number' })
  @Min(0, { message: 'Product price must be greater than or equal to 0' })
  public readonly productPrice: number;

  @IsNumber({}, { message: 'Total value must be a valid number' })
  @Min(0, { message: 'Total value must be greater than or equal to 0' })
  public readonly totalValue: number;

  @IsNumber({}, { message: 'Product ID must be a valid number' })
  @Min(1, { message: 'Product ID must be greater than 0' })
  public readonly productId: number;

  @IsNumber({}, { message: 'Order ID must be a valid number' })
  @Min(1, { message: 'Order ID must be greater than 0' })
  public readonly orderId: number;
}