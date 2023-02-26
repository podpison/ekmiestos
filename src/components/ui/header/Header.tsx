import cn from 'classnames';
import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';
import { useState } from 'react';
import { Lngs } from './lngs/Lngs';
import { Phone } from './Phone';
import { Link } from './Link';
import { FullBg } from '../FullBg';

const links = [
  {
    name: 'Каталог',
    to: 'catalog',
    hoverItems: [
      {
        name: 'Диваны',
        to: 'sofas'
      },
      {
        name: 'Кресла',
        to: 'armchairs'
      },
      {
        name: 'Стулья',
        to: 'chairs'
      },
      {
        name: 'Кровати',
        to: 'beds'
      },
      {
        name: 'Матрасы',
        to: 'mattresses'
      },
      {
        name: 'Пуфы',
        to: 'poufs'
      },
      {
        name: 'Эксклюзивная мебель',
        to: 'exclusiveFurniture'
      },
      {
        name: '2D-3D модели',
        to: '2D-3DModels'
      },
    ]
  },
  {
    name: 'Индивидуальная мебель',
    to: 'individualFurniture',
  },
  {
    name: 'Контакты',
    to: 'contacts',
  },
  {
    name: 'О компании',
    to: 'aboutCompany',
  },
];

export type HeaderLinkType = typeof links[0];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuStatus = () => setIsMenuOpen(prev => !prev);

  let Links = links.map((l, index) => <Link
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
    <Lngs />
    <Phone />
    <BurgerMenu isActive={isMenuOpen} setIsActive={handleMenuStatus} links={links} />
  </header>
};