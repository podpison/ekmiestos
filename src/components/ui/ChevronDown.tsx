import cn from 'classnames';

type Props = {
  className?: string
}

export const ChevronDown: React.FC<Props> = ({ className }) => {
  return <svg
    className={cn('', className)}
    width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path className='transition-colors' d="M12.6725 1L6.55002 8.52066L0.285156 1" stroke="#343434" strokeWidth="0.5" />
  </svg>
};