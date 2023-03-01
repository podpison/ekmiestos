import { Link } from 'react-router-dom';
import bricks from '../../../../assets/imgs/pages/main/individualFurniture/bricks.webp';
import { Button } from '../../../ui/Button';
import { FLO } from '../../../ui/FLO';
import { FullBg } from '../../../ui/FullBg';
import { Rectangle } from '../../../ui/Rectangle';

export const IndividualFurniture: React.FC = () => {
  return <section className='relative mt-32 pt-20 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:pt-[30px] sm:pb-5 sm:mt-36 md:mt-40 lg:mt-48'>
    <FullBg className='bg-light-gray max-sm:h-[70%]' />
    <Rectangle className='items-end w-24 h-[70px] -top-9 -right-2.5 sm:-right-5  lg:w-36 lg:h-28 lg:-right-10'>
      <span className='text-[10px] text-white tracking-[0.245em] mb-3 ml-1 md:text-[12px] lg:text-[15px] lg:ml-2.5 lg:mb-5'>furniture</span>
    </Rectangle>
    <div className='col-[2]'>
      <h2 className='text-white'><FLO text='Индивидуальная мебель' /></h2>
      <div className='mt20-30'>
        <h4 className='text-white'>Полный цикл производства.</h4>
        <p className='mt10-15 text-white font-light'>Качество мягкой мебели начинается задолго до начала её производства.</p>
      </div>
    </div>
    <div className='relative max-sm:mt-16 sm:row-[1/3]'>
      <img className='w-full' src='https://i.postimg.cc/B6wFdr0x/2.webp' alt='example' />
      <Rectangle className='w-16 h-10 -bottom-6 left-[13%] -z-10 sm:w-20 sm:h-14 md:w-28 md:h-20 lg:w-48 lg:h-24' />
      <div className='absolute top-10 -right-2.5 -z-20 h-[calc(100%_+_30px)] w-[80%] bg-teal'>
        <img className='h-full w-full' src={bricks} alt='bricks' />
      </div>
    </div>
    <Link className='block w-fit mt-28 mx-auto sm:mt-[30px]' to='/individualFurniture'>
      <Button className='' isOrange>Индивидуальная мебель</Button>
    </Link>
  </section>
};