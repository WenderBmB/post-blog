import React from "react";
import * as S from "./styles"

interface IUserName {
    name: string
}


const UserName: React.FC<IUserName> = ({name}) => {
    return <S.Container>{name}</S.Container>
}

export default UserName;