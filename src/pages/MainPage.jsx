import styled from 'styled-components';
import Header from '../components/MainPage/Header';
import MessageBox from '../components/MainPage/MeassageBox';
import BottomNav from '../components/UI/BottomNav';

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
            <BottomNav type="main"/>
        </StyledMain>
    );
}

export default MainPage;