import { Link } from "react-router-dom";
import cn from 'classnames';
import { ProductCategoryItemType } from "../../../../redux/reducers/static";

type Props = {

} & ProductCategoryItemType

export const Item: React.FC<Props> = ({ id, img, price, name }) => {
  return <Link
    className={cn(
      "group block max-w-[270px] transition-all mx-auto mt-[15px] lg:mt-[30px]",
      'hover:max-w-[330px] hover:mt-0',
    )}
    to={`/catalog/${id}`}
  >
    <img
      className={cn(
        "w-full max-h-[270px] object-contain transition-all",
        'group-hover:object-cover group-hover:max-h-[300px] group-hover:mx-auto lg:group-hover:max-h-[330px]',
      )}
      src={img}
      alt='item'
    />
    <p className="uppercase font-medium text-center mt-4">{name}</p>
    <p className="open-sans text-orange font-semibold text-center mt-1.5">{price}</p>
  </Link>
};