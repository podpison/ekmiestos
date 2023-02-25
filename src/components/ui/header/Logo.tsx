import { Link } from "react-router-dom";
import logo from './../../../assets/imgs/ui/header/logo.svg';
import logoMobile from './../../../assets/imgs/ui/header/logo-mobile.svg';

export const Logo: React.FC = () => {
  return <Link className='w-[63%] max-w-[150px] sm:max-w-[216px] md:w-full md:mx-auto' to='/'>
    <img className="w-full max-sm:hidden" src={logo} alt='Лого' />
    <img className="w-full sm:hidden" src={logoMobile} alt='Лого' />
  </Link>
};