import { NavLink } from "react-router-dom";
import cn from 'classnames';

type Props = {
  to: string
  name: string
}

export const Link: React.FC<Props> = ({ to, name }) => {
  return <NavLink className={({isActive}) => cn('font-semibold transition-colors hover:text-orange md:text-[14px] max-md:hidden', isActive && 'text-orange')} to={to}>
    {name}
  </NavLink>
};