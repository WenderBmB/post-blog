import React from "react";
import * as S from "./styles"

interface IPostTittle {
    title: string
}


const PostTitle: React.FC<IPostTittle> = ({title}) => {
    return <S.Container>{title}</S.Container>
}

export default PostTitle;