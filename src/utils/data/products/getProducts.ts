import { Products } from "./getProducts.interface";

export async function getProducts(): Promise<Products[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
