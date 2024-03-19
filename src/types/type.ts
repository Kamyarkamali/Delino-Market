import { ReactNode } from "react";

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

export type { Ichildren, Imenu, IopenMenu, ImegaMenu };
