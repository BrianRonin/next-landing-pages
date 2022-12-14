import { Meta, Story } from '@storybook/react/types-6-0'
import { MenuLink, menuLinkProps } from './index'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'children',
    link: 'google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<menuLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}
