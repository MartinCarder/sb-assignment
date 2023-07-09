import { waitFor } from "@testing-library/dom";
import { getProducts } from "./getProducts";
import fetchMock from "jest-fetch-mock";

describe("getProduct", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const testData = { data: "12345" };
  it("Calls correct endpoint and returns data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(testData));
    const data = await getProducts();

    expect(data).toEqual(testData);

    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://fakestoreapi.com/products"
    );
  });

  it("Fails when not ok", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(testData), {
      status: 500,
      statusText: "fail",
    });

    await waitFor(() => {
      expect(getProducts()).rejects.toThrow("Failed to fetch data");
    });
  });

  it("Fails when rejected", async () => {
    fetchMock.mockReject(new Error("fake error message"));

    await waitFor(() => {
      expect(getProducts()).rejects.toThrow("Failed to fetch data");
    });
  });
});
