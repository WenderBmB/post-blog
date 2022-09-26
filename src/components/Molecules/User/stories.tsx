import { Story, Meta } from '@storybook/react/types-6-0';
import User from '.';

export default {
  title: 'Molecules/User',
  component: User,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <User 
      id={1}
      name="Leanne Graham"
      username="Bret"
      email="Sincere@april.biz"
      {...args}
    />
  </div>
);