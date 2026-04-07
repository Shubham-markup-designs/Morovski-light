export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  stock: number;
  image: string;
  href?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
}
