import React from "react";
import Logo from "../../Atoms/Logo";
import MenuList from "../../Molecules/MenuList";
import * as S from "./styles"

const MenuSection: React.FC = () => {
    return (
        <S.Container>
            <Logo />
            <MenuList />
        </S.Container>
    )
}

export default MenuSection;