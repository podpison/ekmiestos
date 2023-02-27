import cn from 'classnames';

type Props = {
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ children, className }) => {
  return <button className={cn('flex text-base font-bold text-white uppercase h-fit py-3 px-5', className)}>
    {children}
  </button>
};