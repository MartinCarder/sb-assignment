import React from "react";
import { ProductCell } from "../productCell/productCell";
import { ProductListProps } from "./productList.interface";

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2  gap-x-3 gap-y-16 mx-2 md:mx-5 ">
      {products.map((item) => (
        <ProductCell
          key={item.id}
          name={item.title}
          description={item.description}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  );
};
