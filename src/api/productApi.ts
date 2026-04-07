import products from "./mock/products.json";
import bestsellerProducts from "./mock/bestseller-products.json";
import featuredProducts from "./mock/featured-products.json";
import type { Product } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products as Product[]);
    }, 500);
  });
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredProducts as Product[]);
    }, 500);
  });
};

export const getBestSellerProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bestsellerProducts as Product[]);
    }, 500);
  });
};
