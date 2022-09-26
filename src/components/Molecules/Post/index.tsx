import React from "react";
import PostBody from "../../Atoms/PostBody";
import PostTitle from "../../Atoms/PostTitle";
import IPost from "./types";
import * as S from "./styles"

const Post: React.FC<IPost> = ({userId, id, title, body}) => {
    return (
        <S.Container>
            <PostTitle title={title} />
            <PostBody body={body} />
        </S.Container>
    )
};

export default Post;