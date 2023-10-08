import styled from 'styled-components';
import Header from './components/Header';
import MessageBox from './components/MeassageBox';
import BottomNav from '../components/UI/BottomNav';
// import Card from '../components/MainPage/Card';


const StyledMain = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// const MainContent = styled.div`
//     flex: 1;
//     width: 100%;
//     overflow-y: auto; /* Enable scrolling for the Card component */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `

const FixedComponents = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; /* Ensure fixed components are above the scrollable content */
`

const CenteredMessageBox = styled(MessageBox)`
    margin-right: calc((390px - 334px) / 2); /* Adjust this value to center the MessageBox correctly */
`

const MainPage = () => {
    return (
        <StyledMain>
            <FixedComponents>
                <Header />
                <CenteredMessageBox />
            </FixedComponents>
            {/* <MainContent>
                <Card />
            </MainContent> */}
            <BottomNav type="main" />
        </StyledMain>
    );
}

export default MainPage;
