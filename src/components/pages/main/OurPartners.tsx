import { FLO } from "../../ui/FLO";
import { FullBg } from "../../ui/FullBg";
import sofas from '../../../assets/imgs/pages/main/ourPartners/sofas.webp';
import { Rectangle } from "../../ui/Rectangle";

type Props = {

}

export const OurPartners: React.FC<Props> = () => {
  return <section className="mt90-160">
    <h2><FLO text='Наши партнёры' /></h2>
    <div className="mt30-80 relative items-center pt-14 sm:py-7 sm:grid sm:gap-7 sm:grid-cols-2 md:grid-cols-[minmax(434.8px,_calc(39%_-_14px))_1fr]">
      <FullBg className="bg-light-gray sm:w-screen sm:-left-[25vw]" />
      <Rectangle className="w-12 h-12 right-0 max-sm:-top-5 sm:w-[200px] sm:h-[150px] sm:-bottom-12 sm:right-[6%]" />
      <div>
        <h4 className="text-white max-w-[16em]">Компании сотрудничают с нами по всему миру</h4>
        <p className="text-white font-light mt-6">На данный момент дилерская сеть фабрики «Экми-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас мы заинтересованы в расширении сети и предлагаем выгодные условия для сотрудничества.</p>
        <p className="text-white font-light mt-4">Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных изделий.</p>
      </div>
      <div className="relative flex z-10 max-sm:mt-16 sm:items-center sm:h-full">
        <FullBg className="bg-teal w-screen -bottom-12 top-auto max-sm:-left-[25vw] sm:-top-7 sm:bg-biege" isCustomPosition />
        <Rectangle className="w-16 h-12 left-6 -z-10 max-sm:-bottom-6 sm:-left-[30px] sm:-top-14 sm:w-[100px] sm:h-20" />
        <img className="w-full object-cover sm:mt-auto" src={sofas} alt='sofas' />
      </div>
    </div>
  </section>
};