import cn from 'classnames';

type Props = {
  className: string
  isCustomPosition?: boolean
}

export const FullBg: React.FC<Props> = ({ className, isCustomPosition }) => {
  return <div className={cn(
    'absolute h-full -z-20',
    className,
    !isCustomPosition && 'top-0 -left-[50vw] w-[200vw]',
  )}>

  </div>
};