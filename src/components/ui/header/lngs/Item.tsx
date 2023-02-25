import cn from 'classnames';

type Props = {
  lng: string
  isActive: boolean
  onClick: (lng: string) => void
}

export const Item: React.FC<Props> = ({ lng, isActive, onClick }) => {
  const handleClick = () => onClick(lng);

  return <li className='px-2 pt-1 last:pb-1 cursor-pointer' onClick={handleClick}>
    <p className={cn("block w-full uppercase font-semibold text-[14px]", isActive ? 'text-orange' : 'text-gray/70 hover:text-orange/60')}>
      {lng}
    </p>
  </li>
};