import { ProductCell } from "@/components/productCell/productCell";
import { getProducts } from "@/utils/data/products/getProducts";

export default async function Home() {

  const data = await getProducts();
  return (
    <main className="grid md:grid-cols-3 grid-cols-2  gap-x-3 gap-y-16">
      {data.map((item) => (
        <ProductCell
          key={item.id}
          name={item.title}
          description={item.description}
          category={item.category}
          image={item.image}
        />
      ))}
    </main>
  );
}
