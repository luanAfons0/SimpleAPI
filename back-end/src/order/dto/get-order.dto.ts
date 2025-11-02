import { Order } from '../../entities/order.entity';

export class GetOrderDto {
  public readonly totalDiscount?: number;
  public readonly extraFee?: number;
  public readonly shippingValue?: number;
  public readonly totalValue: number;
  public readonly paymentStatus: string;
  public readonly orderStatus: string;
  public readonly addressId: number;
  public readonly clientId: number;

  constructor({
    totalDiscount,
    extraFee,
    shippingValue,
    totalValue,
    paymentStatus,
    orderStatus,
    client,
    address,
  }: Pick<
    Order,
    | 'totalDiscount'
    | 'extraFee'
    | 'shippingValue'
    | 'totalValue'
    | 'paymentStatus'
    | 'orderStatus'
    | 'client'
    | 'address'
  >) {
    this.totalDiscount = totalDiscount;
    this.extraFee = extraFee;
    this.shippingValue = shippingValue;
    this.totalValue = totalValue;
    this.paymentStatus = paymentStatus;
    this.orderStatus = orderStatus;
    this.addressId = address.id;
    this.clientId = client.id;
  }
}

