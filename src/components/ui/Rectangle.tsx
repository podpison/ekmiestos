import cn from 'classnames';

type Props = {
  className: string
  children?: React.ReactNode
}

export const Rectangle: React.FC<Props> = ({ className, children }) => {
  return <div className={cn("absolute flex bg-orange", className)}>
    {children}
  </div>
};