import { ProductList } from "@/components/productList/productList";
import { getProducts } from "@/utils/data/products/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl md:mx-auto">
      <ProductList products={products} />
    </main>
  );
}
