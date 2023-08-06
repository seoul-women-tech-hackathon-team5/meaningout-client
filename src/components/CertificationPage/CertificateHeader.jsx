import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledCertificateHeader = styled.div`
width: 390px;
height: 71px;
margin-bottom: 28px;

display: flex;
padding: 18px 128px 18px 16px;
align-items: center;
gap: 15px;

border-bottom-style: solid;
border-bottom-width: 0.5px;

.header-title {
    margin-left: 85px;
    font-size: 20px;
    font-weight: 600;
}

`

export default function CertificateHeader () {
    return(
        <StyledCertificateHeader>
            <Link to="/main">
                <img src="/assets/icons/arrow-back.svg"/>
            </Link>
            <div className='header-title'>영수증 인증하기</div>
        </StyledCertificateHeader>
    )
}
