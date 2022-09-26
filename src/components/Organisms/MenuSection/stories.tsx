import { Story, Meta } from '@storybook/react/types-6-0';
import MenuSection from '.';

export default {
  title: 'Organisms/MenuSection',
  component: MenuSection,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MenuSection 
      {...args}
    />
  </div>
);