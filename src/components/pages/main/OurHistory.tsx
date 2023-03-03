import { FLO } from './../../ui/FLO';
import { FullBg } from './../../ui/FullBg';
import sofaImg from './../../../assets/imgs/pages/main/ourHistory/sofa.webp';
import { Rectangle } from '../../ui/Rectangle';

export const OurHistory: React.FC = () => {
  return <section className='relative mt-[90px] sm:mt-28 md:mt-36 lg:mt-48'>
    <h2><FLO text='Наша история' /></h2>
    <div className="relative pt-12 pb-20 z-10 max-sm:mt-7 sm:absolute sm:top-[22%] sm:w-[350px] sm:px-5 sm:py-6 md:w-[538px] md:px-10 md:py-12">
      <FullBg className='bg-light-gray top-0 sm:w-full sm:left-0' />
      <h4 className='letterSpacing01 text-white'>Наработки длинной в 25 лет</h4>
      <p className='mt10-15 letterSpacing01 text-white font-light'>Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей </p>
    </div>
    <div className='relative -mt-7 sm:mt-4 sm:w-[80%] sm:max-w-[800px] sm:ml-auto'>
      <Rectangle className='w-12 h-12 z-20 max-sm:-top-4 max-sm:-right-2.5 sm:bottom-[90px] sm:left-0 sm:w-24 md:bottom-[137px] lg:bottom-[38%]' />
      <img className='w-full sm:h-[345px] sm:object-cover md:h-[417px] lg:h-auto' src={sofaImg} alt='sofa' />
    </div>
  </section>
};