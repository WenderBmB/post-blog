import React from "react";
import * as S from "./styles"

const MenuList: React.FC = () => {
    return (
        <S.Container>
            <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3.29288L14 9.29288V13.5C14 14.3284 13.3284 15 12.5 15H3.5C2.67157 15 2 14.3284 2 13.5V9.29288L8 3.29288Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.49999V5.99999L11 3.99999V2.49999C11 2.22384 11.2239 1.99999 11.5 1.99999H12.5C12.7761 1.99999 13 2.22384 13 2.49999Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 1.49999C7.68342 1.10946 8.31658 1.10946 8.70711 1.49999L15.3536 8.14643C15.5488 8.34169 15.5488 8.65828 15.3536 8.85354C15.1583 9.0488 14.8417 9.0488 14.6464 8.85354L8 2.20709L1.35355 8.85354C1.15829 9.0488 0.841709 9.0488 0.646447 8.85354C0.451184 8.65828 0.451184 8.34169 0.646447 8.14643L7.29289 1.49999Z" fill="black"/>
                </svg>
                Página Inicial
            </li>
        </S.Container>
    )
}

export default MenuList;