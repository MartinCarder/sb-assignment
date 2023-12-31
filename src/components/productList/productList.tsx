import React from "react";
import { ProductCell } from "../productCell/productCell";
import { ProductListProps } from "./productList.interface";

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div
      data-testid="product-list"
      className="grid grid-cols-2 md:grid-cols-3   gap-x-3 gap-y-16  box-border mx-2 md:mx-5"
    >
      {products.map((item) => (
        <ProductCell
          key={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  );
};
