import React from "react";
import * as S from "./styles"

interface ICommentEmail {
    email: string
}

const CommentEmail: React.FC<ICommentEmail> = ({email}) => {
    return <S.Container>{email}</S.Container>
}

export default CommentEmail;