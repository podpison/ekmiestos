import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/pages/main/MainPage';
import { Header } from './components/ui/header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return <div className="relative container flex flex-col h-[1000vh] px-2.5 max-w-[1170px]">
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  </div>
}

export default App
