import React from "react";
import * as S from "./styles"

interface IUserUsername {
    username: string
}


const UserUsername: React.FC<IUserUsername> = ({username}) => {
    return <S.Container>@{username}</S.Container>
}

export default UserUsername;