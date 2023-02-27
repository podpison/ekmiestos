import { Button } from "../../../ui/Button";
import { FLO } from "../../../ui/FLO";
import { FullBg } from "../../../ui/FullBg";
import { Carousel } from './carousel/Carousel';
import { CarouselItem } from "./CarouselItem";

const items = [
  {
    img: 'https://i.postimg.cc/D0JD96RR/1.png',
    category: 'somewhere',
  },
  {
    img: 'https://i.postimg.cc/52SxK9BL/2.png',
    category: 'somewhere',
  },
  {
    img: 'https://i.postimg.cc/yNf7BfrN/3.png',
    category: 'somewhere',
  },
];

export type MainPageHeroCarouselItemType = typeof items[0];

export const Hero: React.FC = () => {
  let CarouselItems = items.map((i, index) => <CarouselItem {...i} key={index} />);

  return <section className="relative pt-7 pb-14 md:grid md:grid-cols-[calc(30%_-_14px)_calc(70%_-_14px)] md:gap-x-7 md:pt-9">
    <FullBg className="bg-biege md:h-4/5" />
    <h1 className="uppercase text-white md:my-auto">
      <FLO text="Лучшая жизнь созданная для вас!" />
    </h1>
    <Carousel className="mt-7 md:row-[2/4] md:col-[2]" items={CarouselItems} />
    <p className="text-[20px] text-white text-center md:row-[1] max-md:mt-10 md:col-[1/3] md:text-end">Основано в 1993 году</p>
    <Button className="bg-orange max-md:mx-auto md:w-fit max-md:mt-5 lg:-mt-[30px]">Перейти в каталог</Button>
  </section>
};