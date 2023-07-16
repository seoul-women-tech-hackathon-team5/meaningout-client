import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import MakePage from "./pages/MakePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<OnboardingPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/make" element={<MakePage/>}/>
            <Route path="/my" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;