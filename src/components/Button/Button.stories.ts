import { Button } from "./Button";
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta <typeof Button> = {
    title: 'Компоненты/Button',
    component: Button,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
     args: {
        children: 'Кнопка',
     }
}