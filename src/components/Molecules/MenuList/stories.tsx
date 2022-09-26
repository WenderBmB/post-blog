import { Story, Meta } from '@storybook/react/types-6-0';
import MenuList from '.';

export default {
  title: 'Molecules/MenuList',
  component: MenuList,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MenuList 
      {...args}
    />
  </div>
);