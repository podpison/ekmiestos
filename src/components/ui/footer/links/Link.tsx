import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { NavLinkType } from '../../../../static';

type Props = {

} & NavLinkType

export const Link: React.FC<Props> = ({ name, to }) => {
  return <NavLink
    className={({ isActive }) => cn('text-white text-[13px] w-fit transition-all font-medium hover:text-orange', isActive && 'text-orange')}
    to={to}
  >
    {name}
  </NavLink>
};