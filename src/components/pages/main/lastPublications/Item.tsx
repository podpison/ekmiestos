import { Link } from "react-router-dom";
import { ProductCategoryItemType } from "../../../../redux/reducers/static";

type Props = {

} & ProductCategoryItemType

export const Item: React.FC<Props> = ({ id, img, name }) => {
  return <Link
    className="group block max-w-[270px] mx-auto"
    to={`/catalog/${id}`}
  >
    <img className="w-full max-h-[270px] object-contain" src={img} alt='item' />
    <p className="uppercase font-medium text-center transition-colors mt-4 group-hover:text-orange-hover">{name}</p>
  </Link>
};