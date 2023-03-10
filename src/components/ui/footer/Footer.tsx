import logo from '../../../assets/imgs/ui/footer/logo.svg';
import { FullBg } from '../FullBg';
import { Button } from './../Button';
import { currentYear, foundationYear } from '../../../static';
import { Links } from './links/Links';
import { Contacts } from './contacts/Contacts';
import { useState } from 'react';
import { PCModal } from './PCModal';

export const Footer: React.FC = () => {
  const [isPCMOpen, setIsPCMOpen] = useState(false); //PCM - personal consultation modal
  const handlePCM = () => setIsPCMOpen(prev => !prev);

  return <footer className='mt90-160 relative mt-32 sm:mt-36 md:mt-40 lg:mt-44'>
    <p className='text-light-gray font-extrabold text-[80px] leading-[56px] tracking-[0.13em] text-right sm:text-[95px] sm:leading-[67px] md:text-[115px] md:leading-[81px] lg:text-[130px] lg:leading-[92px]'>ekmi</p>
    <div className='relative pt-[60px] pb-7 sm:pt-20'>
      <FullBg className='bg-light-gray' />
      <div className='max-sm:px-5 sm:grid sm:grid-cols-[max-content_1fr_271px] sm:gap-x-4'>
        <Links />
        <div className='mx-auto max-sm:mt-16 max-sm:max-w-[303px] max-sm:px-4 sm:mt-7'>
          <Button className='w-full text-[13px] py-2 px-3' onClick={handlePCM} isPaddings={false} isOrange isArrowRight>Персональная консультация</Button>
        </div>
        <Contacts />
        <div className='mx-auto max-sm:mt-14 max-sm:max-w-[303px] max-sm:px-4 sm:col-[1] sm:row-[1/3]'>
          <img className='w-[150px] mx-auto sm:w-[170px]' src={logo} alt='logo' />
        </div>
      </div>
      <small className='flex items-center justify-center text-white tracking-[.16em] text-[10px] font-medium mt-8'>© {foundationYear}-{currentYear} Интернет-магазин «EKMI™» — меблі</small>
    </div>


    <PCModal isOpen={isPCMOpen} closeModal={handlePCM} />
  </footer>
};