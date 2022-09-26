import styled from "styled-components"

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 20px 50px rgba(18, 17, 39, 0.08);
    border-radius: 20px;
    padding: 20px 0 20px 0;
    margin-bottom: 50px;
`;

export const PostCard = styled.div`
    padding-bottom: 10px;
`;

export const CommentCard = styled.div`
    display: ${(props: any) => (!props.hidden ? 'none' : 'block')};
    div {
        margin-bottom: 10px;
    }
`;

export const CommentsButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    margin: 10px 30px 0 30px;
    padding: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    color: #1a1a1a;
    cursor: pointer;

    svg {
        margin-right: 5px;
    }
`;

export const CloseCommentsButton = styled.button`
    background-color: transparent;
    border: 0;
    margin: 0 auto;
    padding: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    color: #1a1a1a;
    cursor: pointer;
`;

export const ButtonCard = styled.div`
    text-align: center;
`;