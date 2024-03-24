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
};
