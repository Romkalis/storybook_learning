import { ChangeEvent, useState } from "react";
import s from "./style.module.css";

interface InputProps {
  type: "text" | "email" | "tel" | "password";
  value?: string;
  isRequired?: boolean;
  placeholder?: string;
}

export const TextInput = ({
  type,
  value = '',
  isRequired = false,
  placeholder = ''
}: InputProps) => {

  const [inputValue, setInputValue] = useState(value)

  const onchangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
    console.log(evt.target.value)
  }

  return (
    <input
    onChange={onchangeHandler}
    type={type} required={isRequired} className={s.input} value={inputValue} placeholder={placeholder}/>
  );
};
