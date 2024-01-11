export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  brands: string[]
};
export default function insertProducts(brands: string[], product: Product): string {
  const checkBrands = product.brands.every((brand) => brands.includes(brand));
  if (!checkBrands) {
    return 'Seu produto contém marcas indisponíveis.';
  }
  return `${product.name} adicionado(a) com o preço de R$ ${product.price}.`;
}
