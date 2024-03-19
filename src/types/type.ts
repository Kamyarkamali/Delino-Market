import { ReactNode } from "react";
import { IconType } from "react-icons";

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

export type { Ichildren, Imenu, IopenMenu };
