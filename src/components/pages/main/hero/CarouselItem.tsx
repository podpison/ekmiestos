import { MainPageHeroItemType } from "../../../../redux/reducers/static";

type Props = {
  src: MainPageHeroItemType
}

export const CarouselItem: React.FC<Props> = ({ src }) => {
  return <div>
    <img src={src} alt='product' />
  </div>
};