import { FullBg } from "../FullBg";
import { RequestCall } from "../requestCall/RequestCall";
import interier from '../../../assets/imgs/ui/haveQuestions/interier.webp'

export const HaveQuestions: React.FC = () => {
  return <section className="mt90-160 relative max-w-[1060px] py-14 sm:py-7">
    <FullBg className="bg-teal" />
    <img className="absolute top-0 left-0 w-full max-w-[670px] h-full -z-10 max-sm:hidden" src={interier} alt='interier' />
    <RequestCall heading="Остались вопросы?" />
  </section>
};