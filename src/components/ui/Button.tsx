import cn from 'classnames';

type Props = {
  children: React.ReactNode
  className?: string
  isOrange?: boolean
  isArrowRight?: boolean
  isPaddings?: boolean
  isOrangeHover?: boolean
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, className, isOrange, isArrowRight, isPaddings = true, isOrangeHover, onClick }) => {
  return <button
    className={cn(
      'flex items-center text-base font-bold text-white uppercase h-fit transition-colors',
      isPaddings && 'py-3 px-5',
      isOrange && 'bg-orange hover:bg-light-gray',
      isOrangeHover && 'bg-orange hover:bg-orange-hover',
      className,
    )}
    onClick={onClick}
    type='submit'
  >
    {children}
    {isArrowRight &&
      <span className='ml-3'>
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2249 4.35355C15.4201 4.15829 15.4201 3.84171 15.2249 3.64645L12.0429 0.464466C11.8476 0.269204 11.531 0.269204 11.3358 0.464466C11.1405 0.659728 11.1405 0.976311 11.3358 1.17157L14.1642 4L11.3358 6.82843C11.1405 7.02369 11.1405 7.34027 11.3358 7.53553C11.531 7.7308 11.8476 7.7308 12.0429 7.53553L15.2249 4.35355ZM0.417969 4.5L14.8713 4.5V3.5L0.417969 3.5L0.417969 4.5Z" fill="white" />
        </svg>
      </span>
    }
  </button>
};