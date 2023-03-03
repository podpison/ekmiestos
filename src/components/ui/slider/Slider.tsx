import SlickSlider from "react-slick";
import cn from 'classnames';
import { ChevronArrow } from "./ChevronArrow";

type Props = {
  settings: Object //unfortunately, I didn't find the type for this one
  children: React.ReactNode
  className?: string
  isChevronArrows?: boolean
  nextArrowClassName?: string
  prevArrowClassName?: string
}

const defaultSettings = {
  draggable: false,
  autoplay: true,
};


export const Slider: React.FC<Props> = ({ settings, children, className, isChevronArrows = false, nextArrowClassName, prevArrowClassName }) => {
  const chevronArrows = {
    arrows: true,
    nextArrow: <ChevronArrow arrowClassName={nextArrowClassName} d='M0.999999 1L14 13.5217L1 25' />,
    prevArrow: <ChevronArrow arrowClassName={prevArrowClassName} d='M15 1L2 13.5217L15 25' />,
  }

  return <SlickSlider
    className={cn('', className)}
    {...settings}
    {...defaultSettings}
    {...isChevronArrows ? chevronArrows : undefined}
  >
    {children}
  </SlickSlider>
};