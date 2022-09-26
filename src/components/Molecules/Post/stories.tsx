import { Story, Meta } from '@storybook/react/types-6-0';
import Post from '.';

export default {
  title: 'Molecules/Post',
  component: Post,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Post 
      body="laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      id={1}
      title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      userId={1}
      {...args}
    />
  </div>
);