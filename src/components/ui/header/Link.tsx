import { NavLink } from "react-router-dom";
import cn from 'classnames';
import { HeaderLinkType } from "./Header";
import { ChevronDown } from "../ChevronDown";

type Props = {
  className?: string
  activeClassName?: string
  containerClassName?: string
  hoverItemsContainerClassName?: string
  chevronClassName?: string
  linkClassName?: string //for hoverItem link
  hoverItemClassName?: string
} & HeaderLinkType

export const Link: React.FC<Props> = ({ to, name, hoverItems, className, activeClassName, containerClassName, hoverItemsContainerClassName, chevronClassName, linkClassName, hoverItemClassName }) => {

  if (hoverItems) { //it might be better to use another component for that
    let HoverItems = hoverItems?.map((i, index) => <Link className={cn("w-full p-2.5 text-base hover:bg-orange hover:text-white", hoverItemClassName)} name={i.name} to={`/${to}/${i.to}`} key={index} />)

    return <div className={cn("group relative", containerClassName)}>
      <NavLink
        className={({ isActive }) => cn(
          'flex items-center transition-colors',
          isActive && activeClassName,
          className,
          linkClassName
        )}
        to={'/' + to}
      >
        {name}
        <ChevronDown className={cn("", chevronClassName)} />
      </NavLink>
      <div className={cn("flex flex-col", hoverItemsContainerClassName)}>
        {HoverItems}
      </div>
    </div>
  };

  return <NavLink
    className={({ isActive }) => cn(
      'transition-colors',
      isActive && activeClassName,
      className,
    )}
    to={'/' + to}
  >
    {name}
  </NavLink>
};