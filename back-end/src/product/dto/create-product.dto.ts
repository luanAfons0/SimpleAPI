import { IsString, Length, IsNumber, Min, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 50, {
    message: 'SKU length must be between 1 and 50 characters',
  })
  public readonly sku: string;

  @IsString()
  @Length(1, 100, {
    message: 'Name length must be between 1 and 100 characters',
  })
  public readonly name: string;

  @IsString()
  @Length(1, 255, {
    message: 'Image URL length must be between 1 and 255 characters',
  })
  public readonly imageUrl: string;

  @IsString()
  @Length(1, 500, {
    message: 'Description length must be between 1 and 500 characters',
  })
  public readonly description: string;

  @IsNumber({}, { message: 'Stock must be a valid number' })
  @Min(0, { message: 'Stock must be greater than or equal to 0' })
  public readonly stock: number;

  @IsNumber({}, { message: 'Price must be a valid number' })
  @Min(0, { message: 'Price must be greater than or equal to 0' })
  public readonly price: number;
}