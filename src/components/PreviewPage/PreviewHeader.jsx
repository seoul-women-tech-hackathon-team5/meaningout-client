import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledPreviewHeader = styled.div`
width: 390px;
height: 71px;
margin-bottom: 28px;

display: flex;
justify-content: start;
align-items: center;
padding: 16px;

border-bottom-style: solid;
border-bottom-width: 0.5px;

.header-title {
    margin-left: 85px;
    font-size: 20px;
    font-weight: 600;
}

`

export default function PreviewHeader () {
    return(
        <StyledPreviewHeader>
            <Link to="/character">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
            <div className='header-title'>오자 카드 미리보기</div>
        </StyledPreviewHeader>
    )
}
