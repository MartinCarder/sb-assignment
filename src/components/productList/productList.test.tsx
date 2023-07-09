import React from "react";
import { ProductList } from "./productList";
import { mockProduct, mockProduct2 } from "../__Mocks__/products";
import { render, screen } from "@testing-library/react";

describe("ProductList", () => {
  const mockProducts = [mockProduct, mockProduct2];

  it("Displays correct number of products", () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getAllByTestId("product-cell").length).toBe(2);
  });

  it("Displays correct number of products in row for mobile", () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getByTestId("product-list")).toHaveClass("grid-cols-2");
  });

  it("Displays correct number of products in row for none desktop", () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getByTestId("product-list")).toHaveClass("md:grid-cols-3");
  });
});
