import { OrderProduct } from '../../entities/order-product.entity';

export class GetOrderProductDto {
  public readonly extraInfos?: string;
  public readonly quantity: number;
  public readonly productPrice: number;
  public readonly totalValue: number;
  public readonly productId: number;
  public readonly orderId: number;

  constructor({
    extraInfos,
    quantity,
    productPrice,
    totalValue,
    product,
    relatedOrder,
  }: Pick<
    OrderProduct,
    | 'extraInfos'
    | 'quantity'
    | 'productPrice'
    | 'totalValue'
    | 'product'
    | 'relatedOrder'
  >) {
    this.extraInfos = extraInfos;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.totalValue = totalValue;
    this.productId = product.id;
    this.orderId = relatedOrder.id;
  }
}

