export type PageTypeDto = {
  id: string;
  name: string;
};

export type PageDto = {
  id: string;
  path: string;
  name: string;
  type: PageTypeDto;
};
