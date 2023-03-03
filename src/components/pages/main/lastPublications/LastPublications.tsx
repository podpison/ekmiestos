import { FLO } from "../../../ui/FLO";
import { Slider } from "../../../ui/slider/Slider";
import { Item } from "./Item";

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

const items = [
  {
    img: 'https://i.postimg.cc/vmHCcV4x/0.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Martin',
    id: 0,
  },
  {
    img: 'https://i.postimg.cc/ZRXQ7sV6/1.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Alba',
    id: 1,
  },
  {
    img: 'https://i.postimg.cc/pr86gQ64/2.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Toscana',
    id: 2,
  },
  {
    img: 'https://i.postimg.cc/wxsZyHj2/3.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Leonardo',
    id: 3,
  },
  {
    img: 'https://i.postimg.cc/wxsZyHj2/3.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Leonardo',
    id: 4,
  },
  {
    img: 'https://i.postimg.cc/pr86gQ64/2.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Toscana',
    id: 5,
  },
  {
    img: 'https://i.postimg.cc/ZRXQ7sV6/1.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Alba',
    id: 6,
  },
  {
    img: 'https://i.postimg.cc/vmHCcV4x/0.webp',
    category: 'category',
    price: '15200 UAH',
    name: 'Martin',
    id: 7,
  },
]

export const LastPublications: React.FC = () => {
  const Items = items.map(i => <Item {...i} key={i.id} />)

  return <section className="mt90-160">
    <h2><FLO text='Последние публикации' /></h2>
    <Slider className="mt30-80 w-[calc(100%_-_50px)] mx-auto sm:w-[calc(100%_-_40px)]" settings={settings} isChevronArrows>
      {Items}
    </Slider>
  </section>
};