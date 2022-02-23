export const getItems = (count: number) =>
  new Array(count).fill(null).map((_: any, i: number) => ({
    id: `id-${i}`,
    name: `item ${i} name`,
    price: i * 100,
    image: `${i}.png`,
  }));

export const items = getItems(4);
