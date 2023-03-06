import cn from 'classnames';

type Props = {
  className?: string
}

export const HugeO: React.FC<Props> = ({ className }) => {
  return <span className={cn('absolute font-extrabold text-[160px] leading-[110%] text-orange max-sm:hidden', className)}>O</span>
};