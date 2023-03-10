import cn from 'classnames';
import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';
import { useState } from 'react';
import { Lngs } from './lngs/Lngs';
import { Phone } from './Phone';
import { Link } from './Link';
import { FullBg } from '../FullBg';
import { navLinks } from '../../../static';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuStatus = () => setIsMenuOpen(prev => !prev);

  let Links = navLinks.map((l, index) => <Link
    className='font-semibold hover:text-orange md:text-[14px] max-md:hidden'
    activeClassName='text-orange'
    containerClassName="max-md:hidden"
    hoverItemsContainerClassName='invisible opacity-0 bg-white w-max absolute shadow-default transition-all group-hover:opacity-100 group-hover:visible'
    chevronClassName='ml-2 group-hover:[&>path]:stroke-orange'
    linkClassName='group-hover:text-orange'
    {...l} key={index} />
  );

  return <header className={cn('fixed z-50 top-0 w-[calc(100%_-_28px)] max-w-[1148px] grid grid-cols-[1fr_max-content_max-content_max-content] items-center py-4 md:grid-cols-[max-content_max-content_max-content_1fr_max-content_max-content_max-content] md:py-5 md:gap-x-[3.7%] lg:gap-x-12 lg:py-6 mw:gap-x-16')}>
    <FullBg className='bg-white' />
    {Links.slice(0, 3)}
    <Logo />
    {Links.slice(3, 4)}
    <Phone />
    <Lngs />
    <BurgerMenu isActive={isMenuOpen} setIsActive={handleMenuStatus} links={navLinks} />
  </header>
};