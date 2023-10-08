import styled from 'styled-components';

const StyledMyHeader = styled.div`
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
    font-size: 20px;
    font-weight: 600;
}

`

export default function MyHeader () {
    return(
        <StyledMyHeader>
            <div className='header-title'>마이 페이지</div>
        </StyledMyHeader>
    )
}
