import { Product } from './types/Product';

const products = [
  {
    id: 1,
    name: 'Camiseta',
    price: 29.9,
    quantity: 3,
    brands: ['Nike', 'Reebok'],
  },
  {
    id: 2,
    name: 'Caneca',
    price: 19.90,
    quantity: 12,
    brands: ['Stanley', 'Camelbak'],
  },
  {
    id: 3,
    name: 'Boné',
    price: 39.90,
    quantity: 0,
    brands: [],
  },
];

export default function findById(id: number): Product | string {
  const item = products.find((product) => product.id === id);
  if (!item) {
    return `Produto com ID ${id} não encontrado.`;
  }
  return item;
}
