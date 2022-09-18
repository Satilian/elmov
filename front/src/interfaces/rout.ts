export interface IRout {
  title: string;
  link: string;
  subRouts?: Record<string, IRout>;
  img?: string;
}
