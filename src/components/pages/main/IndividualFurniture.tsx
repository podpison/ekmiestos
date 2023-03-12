import { Link } from 'react-router-dom';
import bricks from '../../../assets/imgs/pages/main/individualFurniture/bricks.webp';
import { Button } from '../../ui/Button';
import { FLO } from '../../ui/FLO';
import { FullBg } from '../../ui/FullBg';
import { Rectangle } from '../../ui/Rectangle';

export const IndividualFurniture: React.FC = () => {
  return <section className='relative mt-32 pt-20 sm:grid sm:grid-cols-[calc(60%_-_10px)_calc(40%_-_10px)] sm:gap-x-5 sm:pt-[30px] sm:pb-5 sm:mt-36 md:grid-cols-[calc(60%_-_14px)_calc(40%_-_14px)] md:gap-x-7 md:mt-40 lg:mt-48'>
    <FullBg className='bg-light-gray max-sm:h-[70%] sm:left-auto sm:w-screen sm:max-w-[1368px] sm:right-[max(-40vw,_-547px)]' />
    <Rectangle className='items-end w-24 h-[70px] -top-9 -right-2.5 sm:-right-5  lg:w-36 lg:h-28 lg:-right-12'>
      <span className='text-[10px] text-white tracking-[0.245em] mb-3 ml-1 md:text-[12px] lg:text-[15px] lg:ml-2.5 lg:mb-5'>furniture</span>
    </Rectangle>
    <div className='col-[2] sm:mt-auto'>
      <h2 className='text-white sm:max-w-[10em]'><FLO text='Индивидуальная мебель' /></h2>
      <div className='mt20-30'>
        <h4 className='letterSpacing01 text-white'>Полный цикл производства.</h4>
        <p className='mt10-15 letterSpacing01 text-white font-light sm:max-w-[18em]'>Качество мягкой мебели начинается задолго до начала её производства.</p>
      </div>
    </div>
    <div className='relative max-sm:mt-16 sm:row-[1/3]'>
      <img className='w-full sm:max-w-[600px] sm:ml-auto sm:h-full sm:object-cover' src='https://i.postimg.cc/B6wFdr0x/2.webp' alt='example' />
      <Rectangle className='w-16 h-10 -bottom-6 left-[13%] -z-20 sm:w-20 sm:h-14 sm:left-27vw sm:-bottom-[14%] md:w-28 md:h-20 lg:left-[min(22vw,_300px)] lg:w-48 lg:h-24' />
      <div className='absolute top-10 -right-2.5 -z-20 h-[calc(100%_+_30px)] w-[80%] bg-teal sm:right-0 sm:-top-[30px] sm:w-screen'>
        <img className='h-full w-full sm:w-[31%] sm:max-w-[424px] sm:right-[min(26%,_355px)] sm:absolute' src={bricks} alt='bricks' />
      </div>
    </div>
    <Link className='block w-fit h-fit mt-28 mx-auto sm:mt-[30px] sm:ml-0' to='/individualFurniture'>
      <Button className='' isOrangeHover>Индивидуальная мебель</Button>
    </Link>
  </section>
};