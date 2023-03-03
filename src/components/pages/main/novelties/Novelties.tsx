import { FLO } from '../../../ui/FLO';
import { Item } from './Item';
import { Button } from '../../../ui/Button';
import { Link } from 'react-router-dom';
import { Slider } from '../../../ui/slider/Slider';

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

export type GoodsType = typeof items[0]

const settings = {
  dots: false,
  infinite: false,
  autoplaySpeed: 10000,
  slidesToShow: 3,
  slidesToScroll: 1,
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

  return <section className='mt90-160'>
    <h2><FLO text='Новинки' /></h2>
    <Slider className='mt30-80 w-[calc(100%_-_50px)] max-w-[1070px] mx-auto' settings={settings} isChevronArrows>
      {Items}
    </Slider>
    <Link className='block w-fit mx-auto mt-[60px]' to='/catalog'>
      <Button isOrange>Перейти в каталог</Button>
    </Link>
  </section>
};