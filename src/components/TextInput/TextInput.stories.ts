import { userEvent, within, fn } from '@storybook/test';
import { TextInput } from "./TextInput";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "Инпуты",
  component: TextInput,
  tags: ["autodocs"],
//   args: { onBlur: fn(), onFocus: fn() } // добавляем аргументы, в них в объекте указываем КЛЮЧОМ, на что отрабатывать onBlur, onClick, onChange и тд, значением fn() импортированный из @storybook/test
};

export default meta;

export const EmailInput = {
    play: async ({canvasElement}: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement)
        await userEvent.type(canvas.getByPlaceholderText('Enter your email'), 'example@qwe.ue', {
        delay: 200,
    })},
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
    play: async ({canvasElement}: { canvasElement: HTMLElement }) => {
        const canvas = within(canvasElement)
        await userEvent.type(canvas.getByPlaceholderText('+7-922-033-00-00'), '89221231122', {
            delay: 100,
        })
    },
  args: {
    type: "tel",
    isRequired: true,
    placeholder: "+7-922-033-00-00",
  },
};
export const PasswordInput = {
    args: {
      type: "password",
      isRequired: true,
      placeholder: "Enter your password",
    },
  };
                                                                              
