import React, { useRef, useState } from "react";
import CommentIcon from "../../Atoms/CommentIcon";
import Comment from "../../Molecules/Comment";
import Post from "../../Molecules/Post";
import User from "../../Molecules/User";
import * as S from "./styles"
import NormalizedPost from "./types";

const PostSection: React.FC<NormalizedPost> = ({ comments, post, user }) => {
    const [toggleComments, setToggleComments] = useState(false)

    const ref = useRef<null | HTMLDivElement>(null);
    
    const handleScroll = () => {
        ref.current?.scrollIntoView({behavior: 'auto'});
    };

    let commentsButton;
    if (comments.length > 0) {
        commentsButton = <S.CommentsButton
            onClick={() => setToggleComments(!toggleComments)}
        ><CommentIcon /> {comments.length}</S.CommentsButton>
    } else {
        commentsButton = <S.CommentsButton>
            <CommentIcon /> {comments.length}
        </S.CommentsButton>
    }

    

    return (
        <S.Container ref={ref}>
            <S.PostCard >
                <User email={user.email} id={user.id} name={user.name} username={user.username} />
                <Post body={post.body} id={post.id} title={post.title} userId={post.userId} />
                {commentsButton}
            </S.PostCard>
            <S.CommentCard hidden={toggleComments}>
                {comments.map((item) => {
                    return (
                        <Comment
                            body={item.body}
                            email={item.email}
                            id={item.id}
                            name={item.name}
                            postId={item.postId}
                        />
                    )
                })}
                <S.ButtonCard>
                    <S.CloseCommentsButton onClick={
                        () => {
                            setToggleComments(!toggleComments)
                            handleScroll();
                    }} >Fechar Comentários</S.CloseCommentsButton>
                </S.ButtonCard>
            </S.CommentCard>
        </S.Container>
    )
};

export default PostSection