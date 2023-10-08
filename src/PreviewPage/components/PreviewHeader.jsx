import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledPreviewHeader = styled.div`
  width: 390px;
  height: 71px;
  margin-bottom: 28px;

  display: flex;
  padding: 18px 128px 18px 16px;
  align-items: center;
  gap: 77px;

  border-bottom: 1px solid #D9D9D9;

.header-title {
    color: rgba(0, 0, 0, 0.8);
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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
