import { Link } from "react-router-dom";
import { GoodsType } from "../novelties/Novelties";

type Props = {

} & GoodsType

export const Item: React.FC<Props> = ({ category, id, img, name }) => {
  return <Link
    className="block max-w-[270px] mx-auto"
    to={`/${category}/${id}`}
  >
    <img className="w-full max-h-[270px] object-contain" src={img} alt='item' />
    <p className="uppercase font-medium text-center mt-4">{name}</p>
  </Link>
};