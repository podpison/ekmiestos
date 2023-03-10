import { navLinks } from "../../../../static";
import { Link } from "./Link";

export const Links: React.FC = () => {
  let Links = navLinks.map((l, index) => <Link {...l} key={index} />);

  return <nav className='h-fit grid grid-cols-[repeat(2,_max-content)] justify-between gap-y-5 mx-auto max-sm:max-w-[300px] sm:grid-cols-1 sm:row-[1/3] sm:mx-auto md:grid-cols-[repeat(2,_max-content)] sm:gap-x-8'>
    {Links}
  </nav>
};