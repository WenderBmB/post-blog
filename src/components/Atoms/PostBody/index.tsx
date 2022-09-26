import React from "react";
import * as S from "./styles";

interface IPostBody {
    body: string
}

const PostBody: React.FC<IPostBody> = ({body}) => {
    return <S.Container>{body}</S.Container>
}

export default PostBody;