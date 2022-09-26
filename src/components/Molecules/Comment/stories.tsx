import { Story, Meta } from '@storybook/react/types-6-0';
import Comment from '.';

export default {
  title: 'Molecules/Comment',
  component: Comment,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Comment 
      body="laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium" 
      email="Eliseo@gardner.biz"
      name="id labore ex et quam laborum"
      id={1}
      postId={1}
      {...args}
    />
  </div>
);