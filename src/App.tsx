import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/pages/main/MainPage';
import { Header } from './components/ui/header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/ui/footer/Footer';
import { NotFoundPage } from './components/pages/NotFound';
import { ArrowUp } from './components/ui/ArrowUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div className="relative container flex flex-col min-h-screen px-2.5 max-w-[1170px]">
    <Header />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />

    <ArrowUp />
    <ToastContainer />
  </div>
}

export default App
