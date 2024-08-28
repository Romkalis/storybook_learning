import type {Meta, StoryObj} from '@storybook/react'
import { Title } from './Title'

const meta: Meta<typeof Title> = {
    title: 'Заголовки',
    component: Title,
}

export default meta;

export const TitleExample = {
    args: {
        size: 3,
        children: 'Заголовок H3'
    }
}

export const MainTitle = {
    args: {
        size: 1,
        children: 'Заголовок H1'
    }
}