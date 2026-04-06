import products from "./mock/products.json";
import type { Product } from "./types";
export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products as Product[]);
    }, 500);
  });
};