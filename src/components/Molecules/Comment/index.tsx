import React from "react";
import CommentBody from "../../Atoms/CommentBody";
import CommentEmail from "../../Atoms/CommentEmail";
import CommentName from "../../Atoms/CommentName";
import IComment from "./types";
import * as S from "./styles"



const Comment: React.FC<IComment> = ({postId, body, email, id, name}) => {
    return (
        <S.Container>
            <CommentName name={name} />
            <CommentEmail email={email} />
            <CommentBody body={body} />
        </ S.Container>
        
    )
}

export default Comment;