import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingPage from "./OnboardingPage/OnboardingPage";
import MainPage from "./MainPage/MainPage";
import CertificationPage from "./CertificatePage/CertificationPage";
import MakePage from "./MakePage/MakePage";
import CharacterPage from "./CharacterPage/CharacterPage";
import PreviewPage from "./PreviewPage/PreviewPage";
import MyPage from "./MyPage/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/certificate" element={<CertificationPage />} />
        <Route path="/make" element={<MakePage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
