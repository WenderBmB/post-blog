import React from "react";
import UserName from "../../Atoms/UserName";
import UserUsername from "../../Atoms/UserUsername";
import IUser from "./types";
import * as S from "./styles"


const User: React.FC<IUser> = ({id, name, username}) => {
    return (
        <S.Container>
            <UserName name={name} />
            <UserUsername username={username} />
        </S.Container>
    )
}

export default User;