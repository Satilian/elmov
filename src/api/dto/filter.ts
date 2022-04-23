export interface IBaseFilter {
  name?: string;
  price?: {
    from?: number;
    to?: number;
  };
}
