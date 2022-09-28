import { PageDto } from "./page";

export type CategoryDto = {
  id: string;
  page: PageDto;
  image?: string;
  childrens: CategoryDto[];
};
