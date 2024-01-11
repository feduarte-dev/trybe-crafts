import { Product } from './02-insertProducts';

export type Item = {
  product: Product,
  quantity: number,
  phrase: string,
  brand: string,
};

export default function calculateTotalPrice(item: Item[]): number {
  if (item.length === 0) {
    return 0;
  }
  const result = item.reduce((acc, sale) => acc + (sale.product.price * sale.quantity), 0);

  return Number(result.toFixed(1));
}