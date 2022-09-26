import React from "react";
import MenuSection from "../../Organisms/MenuSection";
import PostSection from "../../Organisms/PostSection";
import NormalizedPost from "../../Organisms/PostSection/types";
import * as S from "./styles"


interface IHomeTemplate {
    normalizedPosts: NormalizedPost[]
}

const HomeTemplate: React.FC<IHomeTemplate> = ({normalizedPosts}) => {
    return (
        <S.Container>
            <S.MenuCard>
                <MenuSection />
            </S.MenuCard>
            <S.PostCard>
                {normalizedPosts.map((item) => {
                    return (
                        <PostSection 
                            comments={item.comments}
                            post={item.post}
                            user={item.user}
                        
                        />
                    )
                })}
                
            </S.PostCard>
        </S.Container>
                
    )
       
};
    

export default HomeTemplate