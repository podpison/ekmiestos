import { SocialNetwork } from './SocialNetwork';
import instagram from '../../../../assets/imgs/ui/footer/instagram.svg';
import facebook from '../../../../assets/imgs/ui/footer/facebook.svg';

export const Contacts: React.FC = () => {
  return <div className='flex items-center justify-between mx-auto max-sm:mt-12 max-sm:max-w-[303px] max-sm:px-4 sm:col-[3] sm:row-[1] sm:w-full'>
    <div className='flex gap-x-4'>
      <SocialNetwork src={instagram} to='https://www.instagram.com/' />
      <SocialNetwork src={facebook} to='https://www.facebook.com/' />
    </div>
    <a className='open-sans text-white' href='tel:+38 (099)-638-45-37'>+38 (099)-638-45-37</a>
  </div>
};