import categories from "./mock/category.json";
import type { Category } from "./types";

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories as Category[]);
    }, 500);
  });
};
