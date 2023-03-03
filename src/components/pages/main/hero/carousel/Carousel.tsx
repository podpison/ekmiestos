import { Slider } from '../../../../ui/slider/Slider';
import './styles.scss';

type Props = {
  items: JSX.Element[]
}

const settings = {
  dots: true,
  arrows: false,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Carousel: React.FC<Props> = ({ items }) => {
  return <Slider
    className='hero__carousel mt-7 md:row-[2/4] md:col-[2]'
    nextArrowClassName='-right-[30px] lg:-right-5'
    prevArrowClassName='-left-[30px] lg:-left-5'
    settings={settings}
  >
    {items}
  </Slider>
};