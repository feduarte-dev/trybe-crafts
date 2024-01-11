import { Item } from './04-calculateTotalPrice';

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[],
  status: 'pendente' | 'enviado' | 'entregue',
};
export default function orderRequest(order: Order): string {
  const checkStock = order.items.find((item) => item.product.quantity === 0);
  if (checkStock) {
    throw new Error(`Desculpe, ${checkStock.product.name} não está disponível no estoque`);
  }
  return `Olá ${order.customerName}, o seu pedido de ID ${order.id} foi ${order.status}.`;
}
