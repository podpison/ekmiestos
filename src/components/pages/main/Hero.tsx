import { FLO } from "../../ui/FLO";
import { FullBg } from "../../ui/FullBg";

const items = [
  {
    img: 'https://i.postimg.cc/D0JD96RR/1.png',
    to: '/catalog/somewhere',
  },
  {
    img: 'https://i.postimg.cc/52SxK9BL/2.png',
    to: '/catalog/somewhere',
  },
  {
    img: 'https://i.postimg.cc/yNf7BfrN/3.png',
    to: '/catalog/somewhere',
  },
];

export const Hero: React.FC = () => {
  return <section className="relative pt-7 pb-14">
    <FullBg className="bg-biege" />
    <h1 className="uppercase">
      <FLO text="Лучшая жизнь созданная для вас!" />
    </h1>
    <p className="text-[20px] text-white text-center">Основано в 1993 году</p>
  </section>
};