import { Story, Meta } from '@storybook/react/types-6-0';
import PostSection from '.';
import { comments, posts, users } from '../../Pages/Home/mocks';

export default {
  title: 'Organisms/PostSection',
  component: PostSection,
} as Meta;

export const Default: Story = (args) => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <PostSection

      comments={comments}
      post={posts[0]}
      user={users[0]}
      {...args}
    />
  </div>
  )
};