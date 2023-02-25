import cn from 'classnames';
import { BurgerIcon } from './BurgerIcon';
import { Logo } from './Logo';
import { useState } from 'react';
import { Lngs } from './lngs/Lngs';
import { Phone } from './Phone';
import { Link } from './Link';

const links = [
  {
    name: 'Каталог',
    to: '/catalog',
  },
  {
    name: 'Индивидуальная мебель',
    to: '/individualFurniture',
  },
  {
    name: 'Контакты',
    to: '/contacts',
  },
  {
    name: 'О компании',
    to: '/aboutCompany',
  },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuStatus = () => setIsMenuOpen(prev => !prev);

  let Links = links.map((l, index) => <Link {...l} key={index} />);

  return <header className={cn('fixed z-50 top-0 w-[calc(100%_-_28px)] max-w-[1170px] grid grid-cols-[1fr_max-content_max-content_max-content] items-center py-4 md:grid-cols-[max-content_max-content_max-content_1fr_max-content_max-content_max-content] md:py-5 md:gap-x-8 lg:gap-x-16 lg:py-6')}>
    {Links.slice(0, 3)}
    <Logo />
    {Links.slice(3, 4)}
    <Lngs />
    <Phone />
    <BurgerIcon isActive={isMenuOpen} setIsActive={handleMenuStatus} />
  </header>
};