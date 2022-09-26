import React from "react";
import * as S from "./styles"

interface ICommentName {
    name: string
}

const CommentName: React.FC<ICommentName> = ({name}) => {
    return <S.Container>{name}</S.Container>
}

export default CommentName;