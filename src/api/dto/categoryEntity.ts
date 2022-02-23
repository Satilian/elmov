import { IBaseFilter } from './filter';

export interface ICategoryEntity {
  id: string;
  name: string;
  desc: string;
  filter: IBaseFilter;
}
