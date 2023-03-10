import { currentYear, foundationYear } from "../../../static";

export const YearOfFoundation: React.FC = () => {
  return <section className="grid mt-16 gap-y-10 gap-x-5 items-center esm:flex esm:justify-between esm:flex-wrap md:mt-20">
    <h3 className="font-light">{foundationYear}</h3>
    <h2 className="text-gray/10 font-semibold text-[95px] leading-none text-center max-esm:row-[1] max-esm:col-[1/3] sm:text-[110px] md:text-[120px] lg:text-[144px]">{currentYear - foundationYear} лет</h2>
    <h3 className="font-light max-esm:ml-auto">{currentYear}</h3>
  </section>
};