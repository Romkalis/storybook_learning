import { TextInput } from "./TextInput";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "Инпуты",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;

export const EmailInput = {
  args: {
    type: "email",
    isRequired: true,
    placeholder: "Enter your email",
  },
};
export const TextfieldInput = {
  args: {
    type: "text",
    isRequired: true,
    placeholder: "Enter text",
  },
};
export const PhoneInput = {
  args: {
    type: "tel",
    isRequired: true,
    placeholder: "+7-922-033-00-00",
  },
};
export const PasswordInput = {
    args: {
      type: "passsword",
      isRequired: true,
      placeholder: "Enter your password",
    },
  };

// interface InputProps {
//     type: "text" | "email" | "tel" | "password";
//     value?: string;
//     isRequired?: boolean;
//     placeholder?: string;
//   }

// export const MainTitle = {
//     args: {

//     }
// }
