export interface Basket {
  name: string,
  items: Item[];
}

export interface Item {
  qty: number;
  title: string;
  price: number;
  category: string; // need to make enum
  imported?: boolean;
}
