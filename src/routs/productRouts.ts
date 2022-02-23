import { IRout } from 'interfaces/rout';

export const productRouts: Record<string, IRout> = {
  feature: {
    title: 'Характеристики',
    link: '/feature',
  },
  spares: {
    title: 'Запчасти',
    link: '/spares',
  },
  review: {
    title: 'Отзывы',
    link: '/review',
  },
};
