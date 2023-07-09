import React from "react";
import { ProductCell } from "./productCell";
import Image from "next/image";
import { render, screen } from "@testing-library/react";
import { mockProduct } from "./__Mocks__/productCell";

// eslint-disable-next-line react/display-name
jest.mock("next/image", () => (props: any) => (
  <img {...props} data-testid="image" />
));

describe("ProductCell", () => {

  

  it("Displays product details", () => {
    render(<ProductCell {...mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
  });

  it("Uses correct image", () => {
    render(<ProductCell {...mockProduct} />);

    expect(screen.getByTestId("image")).toHaveAttribute(
      "src",
      mockProduct.image
    );
  });
});
