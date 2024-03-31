import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface Ichildren {
  children: ReactNode;
}

interface Imenu {
  title: string;
  id: number;
  icons?: JSX.Element;
  path?: string | undefined;
}

interface IopenMenu {
  openMenu: boolean;
}

interface ImegaMenu {
  megaMenu: boolean;
}

interface IsetRegister {
  setRegister: Dispatch<SetStateAction<boolean>>;
  register: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

interface Foodtim {
  id: number;
  image: string;
  title: string;
  icon: string;
  price: number;
  quantity: number;
}

interface IfoodsState {
  showFoods: Foodtim[];
  setShowFoods: React.Dispatch<React.SetStateAction<object[]>>;
}

interface dataFoods {
  id: number;
  title: string;
  image: string;
}

interface Ifoods {
  id: number;
  title: string;
  category: string;
  price: number;
  icon: JSX.Element;
  image: string;
}

interface CartItem {
  id: number;
  quantity: number;
  price: number;
  icon: object;
  image: string;
  title: string;
}

interface Istore {
  store: boolean;
  setStore: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IsearchFiltered {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filtered: [];
  seFiltered: React.Dispatch<React.SetStateAction<[]>>;
}

interface Ifaiverits {
  id: number;
  name: string;
  image: string;
  discount?: number;
}

interface IApp {
  id: number;
  imgae: string;
}

interface Idiscount {
  id: number;
  name: string;
  image: string;
  discount: number;
  path: string;
}

interface ImenuZiyafat {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
  discount: number;
}

interface Icomment {
  id: number;
  name: string;
  title: string;
  image: string;
  date: string;
}

interface i {
  id: number;
  name: string;
  title: string;
  image: string;
  date: string;
}

export type {
  Ichildren,
  Imenu,
  IopenMenu,
  ImegaMenu,
  IsetRegister,
  dataFoods,
  Ifoods,
  IfoodsState,
  Foodtim,
  CartItem,
  Istore,
  IsearchFiltered,
  Ifaiverits,
  IApp,
  Idiscount,
  ImenuZiyafat,
  Icomment,
  i,
};
