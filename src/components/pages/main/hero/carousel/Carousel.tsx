import Slider from "react-slick";
import cn from 'classnames'
import './styles.scss';

type Props = {
  items: JSX.Element[]
  className?: string
}

const settings = {
  dots: true,
  arrows: false,
  draggable: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Carousel: React.FC<Props> = ({ items, className }) => {
  return <Slider className={cn('carousel', className)} {...settings}>
    {items}
  </Slider>
};