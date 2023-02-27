import { MainPageHeroCarouselItemType } from "./Hero";

type Props = {

} & MainPageHeroCarouselItemType

export const CarouselItem: React.FC<Props> = ({ category, img }) => {
  return <div>
    <img src={img} alt={category} />
  </div>
};