import { FLO } from '../../../ui/FLO';
import { Item } from './Item';
import { Button } from '../../../ui/Button';
import { Link } from 'react-router-dom';
import { Slider } from '../../../ui/slider/Slider';
import { useSelector } from 'react-redux';
import { selectProductCategories } from '../../../../redux/selectors';
import { useMemo } from 'react';

const settings = {
  dots: false,
  infinite: false,
  autoplaySpeed: 10000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
};

export const Novelties: React.FC = () => {
  let categories = useSelector(selectProductCategories);

  let itemsToRender = useMemo(() => {
    let items = [];

    for (let category of categories) {
      for (let product of category.products) {
        product.isNew && items.push(product);
      };
    };

    return items;
  }, [categories.length]);

  let Items = itemsToRender.map(i => <Item {...i} key={i.id} />);

  return <section className='mt90-160'>
    <h2><FLO text='Новинки' /></h2>
    <Slider className='mt30-80 w-[calc(100%_-_50px)] max-w-[1070px] mx-auto md:mt-7 lg:mt-12' settings={settings} isChevronArrows>
      {Items}
    </Slider>
    <Link className='block w-fit mx-auto mt-[60px]' to='/catalog'>
      <Button isOrange>Перейти в каталог</Button>
    </Link>
  </section>
};