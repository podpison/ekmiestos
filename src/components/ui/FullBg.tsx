import cn from 'classnames';

type Props = {
  className: string
}

export const FullBg: React.FC<Props> = ({ className }) => {
  return <div className={cn('absolute top-0 -left-[50vw] w-[200vw] h-full -z-20', className)}>

  </div>
};