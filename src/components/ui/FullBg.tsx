import cn from 'classnames';

type Props = {
  className: string
}

export const FullBg: React.FC<Props> = ({ className }) => {
  return <div className={cn('absolute -left-[50vw] w-[200vw] h-full -z-10', className)}>

  </div>
};