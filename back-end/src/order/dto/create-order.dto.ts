import { IsEnum, IsNumber, Min, IsOptional } from 'class-validator';
import { OrderStatus } from 'src/enums/order-status.enum';
import { PaymentStatus } from 'src/enums/payment-status.enum';

export class CreateOrderDto {
  @IsOptional()
  @IsNumber({}, { message: 'Total discount must be a valid number' })
  @Min(0, { message: 'Total discount must be greater than or equal to 0' })
  public readonly totalDiscount: number;

  @IsOptional()
  @IsNumber({}, { message: 'Extra fee must be a valid number' })
  @Min(0, { message: 'Extra fee must be greater than or equal to 0' })
  public readonly extraFee: number;

  @IsOptional()
  @IsNumber({}, { message: 'Shipping value must be a valid number' })
  @Min(0, { message: 'Shipping value must be greater than or equal to 0' })
  public readonly shippingValue: number;

  @IsNumber({}, { message: 'Total value must be a valid number' })
  @Min(0, { message: 'Total value must be greater than or equal to 0' })
  public readonly totalValue: number;

  @IsEnum(PaymentStatus, {
    message: `Payment status must be one of: ${Object.values(PaymentStatus).join(', ')}`,
  })
  public readonly paymentStatus: PaymentStatus;

  @IsEnum(OrderStatus, {
    message: `Order status must be one of: ${Object.values(OrderStatus).join(', ')}`,
  })
  public readonly orderStatus: OrderStatus;

  @IsNumber({}, { message: 'Client ID must be a valid number' })
  @Min(1, { message: 'Client ID must be greater than 0' })
  public readonly clientId: number;

  @IsNumber({}, { message: 'Address ID must be a valid number' })
  @Min(1, { message: 'Address ID must be greater than 0' })
  public readonly addressId: number;
}