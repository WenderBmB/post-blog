import React from "react";
import * as S from "./styles"

interface ISeeCommentsButton {
    seeCommentsButton: () => void
}

const SeeCommentsButton: React.FC<ISeeCommentsButton> = ({seeCommentsButton}) => {
    return (
        <S.Container onClick={seeCommentsButton}>Comentários</S.Container>
    )
}

export default SeeCommentsButton