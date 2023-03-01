import { FLO } from '../../../ui/FLO';
import Slider from "react-slick";
import { Item } from './Item';
import { Arrow } from './Arrow';
import { Button } from '../../../ui/Button';
import { Link } from 'react-router-dom';

const items = [
  {
    img: 'https://i.postimg.cc/s2B6dqDY/0.png',
    category: 'category',
    price: '15200 UAH',
    name: 'ALBA',
    id: 0,
  },
  {
    img: 'https://i.postimg.cc/9fvxWbrv/1.png',
    category: 'category',
    price: '15200 UAH',
    name: 'Martin',
    id: 1,
  },
  {
    img: 'https://i.postimg.cc/MKbgdCvX/2.png',
    category: 'category',
    price: '15200 UAH',
    name: 'Luara',
    id: 2,
  },
  {
    img: 'https://i.postimg.cc/9fvxWbrv/1.png',
    category: 'category',
    price: '15200 UAH',
    name: 'Martin',
    id: 3,
  },
  {
    img: 'https://i.postimg.cc/MKbgdCvX/2.png',
    category: 'category',
    price: '15200 UAH',
    name: 'Luara',
    id: 4,
  },
  {
    img: 'https://i.postimg.cc/s2B6dqDY/0.png',
    category: 'category',
    price: '15200 UAH',
    name: 'ALBA',
    id: 5,
  },
];

export type NoveltiesItemType = typeof items[0]

const settings = {
  dots: false,
  arrows: true,
  draggable: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Arrow arrowClassName='-right-[30px] lg:-right-5' d='M0.999999 1L14 13.5217L1 25' />,
  prevArrow: <Arrow arrowClassName='-left-[30px] lg:-left-5' d='M15 1L2 13.5217L15 25' />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
  ],
};

export const Novelties: React.FC = () => {
  let Items = items.map(i => <Item {...i} key={i.id} />);

  return <section className='mt-[90px] sm:mt-28 md:mt-32 lg:mt-40'>
    <h2><FLO text='Новинки' /></h2>
    <Slider className='w-[calc(100%_-_50px)] max-w-[1070px] mx-auto mt-7' {...settings}>
      {Items}
    </Slider>
    <Link className='block w-fit mx-auto mt-[60px]' to='/catalog'>
      <Button isOrange>Перейти в каталог</Button>
    </Link>
  </section>
};