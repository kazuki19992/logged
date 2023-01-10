import { ReactNode } from "react"
import { TailwindColorClasses } from "../../TailwindTypes"

export type LayoutProps = {
  children: ReactNode;
};

export type PanelProps = {
  children: ReactNode;
  className?: string;
};

export type ColorScheme = {
  primary: TailwindColorClasses<string>;
};