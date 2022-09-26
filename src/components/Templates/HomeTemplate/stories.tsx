import { useMemo } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HomeTemplate from '.';
import { comments, posts, users } from '../../Pages/Home/mocks';
import IPost from '../../Molecules/Post/types';
import NormalizedPost from '../../Organisms/PostSection/types';
import IComment from '../../Molecules/Comment/types';
import IUser from '../../Molecules/User/types';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as Meta;

export const Default: Story = (args) => {


const normalized_posts: NormalizedPost[] = useMemo(() => {
  return posts.map((post: IPost) => {
    const normalizedPost: NormalizedPost = {
      post,
      comments: comments.filter(
        (comments: IComment) => comments.postId === post.id
      ),
      user:
        users.find((user: IUser) => user.id === post.userId) || ({} as IUser
      ),
    };
    return normalizedPost;
  });
}, []);
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <HomeTemplate
      normalizedPosts={normalized_posts}
      {...args}
    />
  </div>
  )
};