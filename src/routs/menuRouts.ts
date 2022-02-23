import { IRout } from 'interfaces/rout';

export const transportRouts: Record<string, IRout> = {
  scooters: {
    link: '/scooters',
    title: 'Самокаты',
    img: '/images/menu/samokat.png',
  },
  bicycles: {
    link: '/bicycles',
    title: 'Велосипеды',
    img: '/images/menu/velo.png',
  },
  hoverboards: {
    link: '/hoverboards',
    title: 'Гироскутеры',
    img: '/images/menu/giro.png',
  },
  monowheels: {
    link: '/monowheels',
    title: 'Моноколёса',
    img: '/images/menu/kol.png',
  },
  segways: {
    link: '/segways',
    title: 'Сигвеи',
    img: '/images/menu/segways.png',
  },
};

export const partsRouts: Record<string, IRout> = {
  partsForScooters: {
    link: '/parts-for-scooters',
    title: 'Запчасти для самокатов',
    img: '/images/menu/samokat.png',
  },
  partsForBicycles: {
    link: '/parts-for-bicycles',
    title: 'Запчасти для велосипедов',
    img: '/images/menu/velo.png',
  },
  partsForHoverboards: {
    link: '/parts-for-hoverboards',
    title: 'Запчасти для гироскутеров',
    img: '/images/menu/giro.png',
  },
  partsForMonowheels: {
    link: '/parts-for-monowheels',
    title: 'Запчасти для моноколеса',
    img: '/images/menu/kol.png',
  },
  partsForSegways: {
    link: '/parts-for-segways',
    title: 'Запчасти для сигвеев',
    img: '/images/menu/segways.png',
  },
};

export const repairRouts: Record<string, IRout> = {
  scootersRepair: {
    link: '/scooters-repair',
    title: 'Ремонт самокатов',
    img: '/images/menu/samokat.png',
  },
  bicyclesRepair: {
    link: '/bicycles-repair',
    title: 'Ремонт велосипедов',
    img: '/images/menu/velo.png',
  },
  hoverboardsRepair: {
    link: '/hoverboards-repair',
    title: 'Ремонт гироскутеров',
    img: '/images/menu/giro.png',
  },
  monowheelsRepair: {
    link: '/monowheels-repair',
    title: 'Ремонт моноколеса',
    img: '/images/menu/kol.png',
  },
  segwaysRepairs: {
    link: '/segways-repairs',
    title: 'Ремонт сигвеев',
    img: '/images/menu/segways.png',
  },
  waterproofing: {
    link: '/waterproofing',
    title: 'Гидроизоляция',
    img: '/images/menu/gidro.png',
  },
};

export const accumRouts: Record<string, IRout> = {
  batteryRepair: {
    link: '/battery-repair',
    title: 'Ремонт и восстановление аккумуляторов',
  },
  batteryManufacturing: {
    link: '/battery-manufacturing',
    title: 'Изготовление аккумуляторов',
  },
};

export const topMenuRouts: Record<string, IRout> = {
  transport: {
    link: '/transport',
    title: 'Электротранспорт',
    subRouts: transportRouts,
  },
  parts: {
    link: '/parts',
    title: 'Комплектующие',
    subRouts: partsRouts,
  },
  accums: {
    link: '/accums',
    title: 'Аккумуляторы',
    subRouts: accumRouts,
  },
  repair: {
    link: '/repair',
    title: 'Ремонт',
    subRouts: repairRouts,
  },
  contacts: {
    link: '/contacts',
    title: 'Контакты',
  },
};
