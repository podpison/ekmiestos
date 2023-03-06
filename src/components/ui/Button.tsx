import cn from 'classnames';

type Props = {
  children: React.ReactNode
  className?: string
  isOrange?: boolean
}

export const Button: React.FC<Props> = ({ children, className, isOrange }) => {
  return <button
    className={cn(
      'flex text-base font-bold text-white uppercase h-fit transition-colors py-3 px-5',
      className,
      isOrange && 'bg-orange hover:bg-light-gray'
    )}
    type='submit'
  >
    {children}
  </button>
};