import styled from 'styled-components';
import Header from '../components/MainPage/Header';
import MessageBox from '../components/MainPage/MeassageBox';

const StyledMain = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainPage = () => {
    return (
        <StyledMain>
            <Header/>
            <MessageBox/>
        </StyledMain>
    );
}

export default MainPage;