import cn from 'classnames';
import { HeaderLinkType } from './Header';
import { Link } from './Link';
import { motion } from "framer-motion";

type Props = {
  isActive: boolean
  setIsActive: () => void
  links: HeaderLinkType[]
}


export const BurgerMenu: React.FC<Props> = ({ isActive, setIsActive, links }) => {
  const lineClassNames = cn('relative block top-0 h-[2px] bg-black mb-2 transition-all', isActive && 'w-[19px] rotate-45');

  let Links = links.map((l, index) => <Link
    className='text-base w-full hover:text-white hover:bg-orange p-2.5'
    chevronClassName='hidden'
    hoverItemsContainerClassName='w-full'
    hoverItemClassName='pl-5 before:content-["-"] before:mr-1'
    {...l} key={index} />
  );

  return <div className='md:hidden'>
    <div className="relative w-6 h-6 cursor-pointer z-10 ml-7 sm:ml-9 md:ml-12" onClick={setIsActive}>
      <span className={cn('origin-[0]', lineClassNames, isActive && '-top-px')} />
      <span className={cn('right-0 w-6', lineClassNames, isActive && 'top-px w-[32px] right-1 -rotate-45')} />
      <span className={cn('mb-0 origin-[32px]', lineClassNames, isActive && 'top-[11px]')} />
    </div>
    <motion.div
      className='absolute right-0 top-4 flex flex-col bg-white px-5 py-7 md:top-5 lg:top-6'
      animate={{ x: isActive ? 0 : 310 }}
      initial={false}
    >
      {Links}
    </motion.div>
  </div>
};