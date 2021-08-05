import { Story, Meta } from '@storybook/react'
import Slot from '.'

export default {
  title: 'Slot',
  component: Slot
} as Meta

export const Default: Story = () => <Slot />
