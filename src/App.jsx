import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import MakePage from "./pages/MakePage";
import CertificationPage from "./pages/CertificationPage";
import PreviewPage from "./pages/PreviewPage";
import BottomNav from "./components/UI/BottomNav";
import CharacterPage from "./pages/CharacterPage";

const App = () => {
  return (
    <>
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
        <BottomNav/>
      </BrowserRouter>
    </>
  )
}

export default App;