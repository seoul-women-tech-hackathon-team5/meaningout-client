import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import OnboardingPage from "./pages/OnboardingPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import MakePage from "./pages/MakePage";
import CertificationPage from "./pages/CertificationPage";
import PreviewPage from "./pages/PreviewPage";
import CharacterPage from "./pages/CharacterPage";

const StyledApp = styled.div`
  // width: 390px;
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // background-color: white;
`

const App = () => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<OnboardingPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/certificate" element={<CertificationPage/>}/>
            <Route path="/make" element={<MakePage/>}/>
            <Route path="/character" element={<CharacterPage/>}/>
            <Route path="/preview" element={<PreviewPage/>}/>
            <Route path="/my" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App;