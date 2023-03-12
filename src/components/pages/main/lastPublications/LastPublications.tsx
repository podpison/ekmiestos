import { useSelector } from "react-redux";
import { FLO } from "../../../ui/FLO";
import { Slider } from "../../../ui/slider/Slider";
import { Item } from "./Item";
import { selectProductCategories } from './../../../../redux/selectors';
import { useEffect, useMemo } from 'react';

const settings = {
  dots: false,
  infinite: false,
  autoplaySpeed: 10000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
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

export const LastPublications: React.FC = () => {
  let categories = useSelector(selectProductCategories);

  let itemsToRender = useMemo(() => {
    return categories.map(i => i.products[i.products.length - 1]);
  }, [categories.length]);

  let Items = itemsToRender.map(i => <Item {...i} key={i.id} />)

  return <section className="mt90-160">
    <h2><FLO text='Последние публикации' /></h2>
    <Slider className="mt30-80 w-[calc(100%_-_50px)] mx-auto sm:w-[calc(100%_-_40px)]" settings={settings} isChevronArrows>
      {Items}
    </Slider>
  </section>
};