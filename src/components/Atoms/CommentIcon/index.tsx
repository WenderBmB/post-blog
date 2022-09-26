import React from "react";
import * as S from "./styles"



const CommentIcon: React.FC = () => {
    return (
        <S.Container width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H11.5858C12.1162 11 12.6249 11.2107 13 11.5858L15 13.5858V2C15 1.44772 14.5523 1 14 1H2ZM14 0C15.1046 0 16 0.895431 16 2V14.7929C16 15.2383 15.4614 15.4614 15.1464 15.1464L12.2929 12.2929C12.1054 12.1054 11.851 12 11.5858 12H2C0.895431 12 0 11.1046 0 10V2C0 0.895431 0.895431 0 2 0H14Z" fill="black"/>
        </S.Container>
    )
};

export default CommentIcon;