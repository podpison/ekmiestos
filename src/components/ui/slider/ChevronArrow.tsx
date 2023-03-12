import cn from 'classnames';

type Props = {
  arrowClassName?: string
  d: string

  onClick?: () => void //props from the slider
  className?: string
  styles?: React.CSSProperties
}

export const ChevronArrow: React.FC<Props> = ({ d, arrowClassName, className, ...props }) => {
  return <svg
    className={cn('transition-all [&.slick-disabled]:cursor-default [&.slick-disabled]:opacity-20', className, arrowClassName)}
    {...props}
    width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} stroke="#343434" strokeOpacity="0.7" strokeWidth="2" />
  </svg>
};