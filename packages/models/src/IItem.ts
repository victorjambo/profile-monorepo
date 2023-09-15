export interface IItem {
  title: string;
  role: string;
  link: string;
  img?: string;
  desc?: string;
}

export interface IItemProp {
  item: IItem;
  counter: number;
  count: number;
}
