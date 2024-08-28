import { ReactNode } from "react";
import s from "./style.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
export const Button = ({ children }: ButtonProps) => {
  return <button className={s.button}>{children}</button>;
};
