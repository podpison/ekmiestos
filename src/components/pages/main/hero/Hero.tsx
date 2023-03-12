import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMainPageHeroitems } from "../../../../redux/selectors";
import { Button } from "../../../ui/Button";
import { FLO } from "../../../ui/FLO";
import { FullBg } from "../../../ui/FullBg";
import { Carousel } from './carousel/Carousel';
import { CarouselItem } from "./CarouselItem";

export const Hero: React.FC = () => {
  let items = useSelector(selectMainPageHeroitems);
  let CarouselItems = items.map((i, index) => <CarouselItem src={i} key={index} />);

  return <section className="relative pt-7 pb-14 md:grid md:grid-cols-[calc(30%_-_14px)_calc(70%_-_14px)] md:gap-x-7 md:pt-9">
    <FullBg className="bg-biege md:h-4/5" />
    <h1 className="uppercase text-white md:my-auto">
      <FLO text="Лучшая жизнь созданная для вас!" />
    </h1>
    <Carousel items={CarouselItems} />
    <p className="text-[20px] text-white text-center md:row-[1] max-md:mt-10 md:col-[1/3] md:text-end">Основано в 1993 году</p>
    <Link className="h-fit max-md:mx-auto md:w-fit max-md:mt-5 lg:-mt-[30px]" to='/catalog'>
      <Button isOrange>Перейти в каталог</Button>
    </Link>
  </section>
};