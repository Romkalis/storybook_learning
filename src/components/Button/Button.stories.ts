import { Button } from "./Button";
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta <typeof Button> = {
    title: 'Компоненты/Button',
    component: Button,
    tags: ['autodocs'] // отвечает за автодокументирование
}

export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
     args: {
        children: 'Кнопка',
        onClick: () => { },
        appearance: 'primary',
     }
}

export const Secondary: Story = {
    name: 'Второстепенная кнопка',
    parameters: {
        docs: {
            description: {
                story: 'Средняя кнопка с красным фоном'
            }
        }
    },

    args: {
       children: 'Кнопка 2',
       onClick: () => { },
       appearance: 'danger',
       size: 'm'
    }
}