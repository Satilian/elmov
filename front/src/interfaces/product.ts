import { CategoryDto } from "./category";
import { PageDto } from "./page";

export type ProductImageDto = {
  id: string;
  src: string;
};

export type ProductDto = {
  id: string;
  price: string;
  page: PageDto;
  category: CategoryDto;
  images: ProductImageDto[];
};
