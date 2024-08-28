import { ReactNode } from "react";
import s from "./style.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  appearance?: 'primary' | 'danger';
  size?: 'l' | 'm' | undefined;
}
export const Button = ({ children, onClick, appearance = 'primary', size = undefined}: ButtonProps) => {
  return <button onClick={onClick} 
  className={`
    ${s.button} 
    ${appearance !== 'primary' ? s['button-danger'] : s['button-primary']}
    ${size === 'l' ? s['button-large'] : (size === 'm' ? s['button-medium'] : '')}
  `}>{children}</button>;
};
