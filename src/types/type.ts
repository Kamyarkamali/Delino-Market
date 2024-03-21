import { Dispatch, ReactNode, SetStateAction } from "react";

interface Ichildren {
  children: ReactNode;
}

interface Imenu {
  title: string;
  id: number;
  icons?: JSX.Element;
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

export type { Ichildren, Imenu, IopenMenu, ImegaMenu, IsetRegister };
