import styled from 'styled-components';
import { useState } from 'react';
import AreaItem from './AreaItem';
import { AreaNames } from './AreaNames';

const StyledHeader = styled.div`
    width: 390px;
    height: 71px;
    // position: fixed;
    // top: 0;
    margin-bottom: 28px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;

    border-bottom-style: solid;
    border-bottom-width: 0.5px;
`

export default function Header() {
    // Area 토글 관리
    const [currentTitle, setCurrentTitle] = useState("종로구");
    
    const handleContentClick = (clickedTitle) => {
        setCurrentTitle(clickedTitle);
    };

    return (
        <StyledHeader>
            <AreaItem
                title={currentTitle}
                content={AreaNames}
                onContentClick={handleContentClick}
            />
        </StyledHeader>
    );
}