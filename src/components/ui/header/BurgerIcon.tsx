import cn from 'classnames';

type Props = {
  isActive: boolean
  setIsActive: () => void
}


export const BurgerIcon: React.FC<Props> = ({ isActive, setIsActive }) => {
  const lineClassNames = cn('relative block top-0 h-[2px] bg-black mb-2 transition-all', isActive && 'w-[19px] rotate-45');

  return <div className="w-6 h-6 cursor-pointer ml-7 sm:ml-9 md:ml-12 md:hidden" onClick={setIsActive}>
    <span className={cn('origin-[0]', lineClassNames, isActive && '-top-px')} />
    <span className={cn('right-0 w-6', lineClassNames, isActive && 'top-px w-[32px] right-1 -rotate-45')} />
    <span className={cn('mb-0 origin-[32px]', lineClassNames, isActive && 'top-[11px]')} />
  </div>
};