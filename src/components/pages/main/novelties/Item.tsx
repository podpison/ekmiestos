import { Link } from "react-router-dom";
import { NoveltiesItemType } from "./Novelties";

type Props = {

} & NoveltiesItemType

export const Item: React.FC<Props> = ({ category, id, img, price, name }) => {
  return <Link
    className="block max-w-[270px] mx-auto"
    to={`/${category}/${id}`}
  >
    <img className="w-full max-h-[270px] object-contain" src={img} alt='item' />
    <p className="uppercase font-medium text-center mt-4">{name}</p>
    <p className="open-sans text-orange font-semibold text-center mt-1.5">{price}</p>
  </Link>
};