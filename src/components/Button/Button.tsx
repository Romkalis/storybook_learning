import { ReactNode } from "react";
import s from "./style.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  appearance: 'primary' | 'danger';
}
export const Button = ({ children, onClick, appearance = 'primary' }: ButtonProps) => {
  return <button onClick={onClick} className={`${s.button} ${appearance !== 'primary' ? s['button-danger'] : s['button-primary']}
  `}>{children}</button>;
};
