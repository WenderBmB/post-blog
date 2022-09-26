import React from "react";
import * as S from "./styles"

interface ICommentBody {
    body: string
}

const CommentBody: React.FC<ICommentBody> = ({body}) => {
    return <S.Container>{body}</S.Container>
}

export default CommentBody;