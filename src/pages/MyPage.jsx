import styled from 'styled-components';
import MyHeader from '../components/MyPage/MyHeader';

const StyledMyPage = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MyPage = () => {
    return (
        <StyledMyPage>
            <MyHeader/>
            <div>MyPage</div>
        </StyledMyPage>
    );
}

export default MyPage;