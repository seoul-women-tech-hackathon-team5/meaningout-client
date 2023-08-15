import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledMakeHeader = styled.div`
  width: 390px;
  height: 71px;
  margin-bottom: 28px;

  display: flex;
  padding: 18px 128px 18px 16px;
  align-items: center;
  gap: 75px;

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

export default function MakeHeader () {
    return(
        <StyledMakeHeader>
            <Link to="/certificate">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
            <div className='header-title'>오자 카드 만들기</div>
        </StyledMakeHeader>
    )
}
