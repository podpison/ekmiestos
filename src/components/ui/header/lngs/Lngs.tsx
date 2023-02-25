import { useRef, useState } from 'react';
import chevronDownImg from '../../../../assets/imgs/chevron-down.svg';
import { Item } from './Item';
import cn from 'classnames';
import { useFocus } from '../../../../hooks/useFocus';

const lngs = ['ru', 'ua', 'en'];

export const Lngs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentLng, setCurrentLng] = useState(lngs[0]);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpenStatus = () => setIsOpen(prev => !prev);
  useFocus(ref, () => isOpen && setIsOpen(false));
  
  const handleItemClick = (lng: string) => {
    setCurrentLng(lng);
    handleOpenStatus();
  };

  const Items = lngs.map((i, index) => <Item lng={i} isActive={i === currentLng} onClick={handleItemClick} key={index} />);

  return <div className="relative ml-auto" ref={ref}>
    <button
      className="flex items-center uppercase transition font-semibold text-[14px]"
      onClick={handleOpenStatus}
    >
      <span className='w-[22px]'>{currentLng}</span>
      <span className="ml-2 w-3 h-2">
        <img src={chevronDownImg} alt='вниз' />
      </span>
    </button>
    <ul
      className={cn(
        "absolute z-30 m-0 overflow-hidden bg-white text-center shadow-default font-semibold",
        !isOpen && 'hidden'
      )}
    >
      {Items}
    </ul>
  </div>
};