import { useMemo, useEffect, useState } from "react";
import IComment from "../../Molecules/Comment/types";
import IPost from "../../Molecules/Post/types";
import IUser from "../../Molecules/User/types";
import NormalizedPost from "../../Organisms/PostSection/types";
import HomeTemplate from "../../Templates/HomeTemplate";
import {  users } from "./mocks";
import axios from "axios";


const Home = () => {
  const defaultPosts:IPost[] = [];
  const defaultComments:IComment[] = [];

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);
  const [comments, setComments]: [IComment[], (comments: IComment[]) => void] = useState(defaultComments);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data)
        console.log(posts);
      }).catch(err =>{console.log(err)})

    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        setComments(response.data)
      }).catch(err =>{console.log(err)})
    
  },[posts])
    
    const normalized_posts: NormalizedPost[] = useMemo(() => {
        return posts.map((post: IPost) => {
          const normalizedPost: NormalizedPost = {
            post,
            comments: comments.filter(
              (comments: IComment) => comments.postId === post.id
            ),
            user:
              users.find((user: IUser) => user.id === post.userId) || ({} as IUser
            )
          };
          return normalizedPost;
        });
    }, [comments, posts]);

    return <HomeTemplate normalizedPosts={normalized_posts} />
}

export default Home;