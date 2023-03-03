type Props = {
  text: string
  id: number
}

export const Item: React.FC<Props> = ({ text, id }) => {
  return <div className="relative max-w-[278px] max-esm:ml-auto esm:mx-auto">
    <span className="poppins absolute -top-9 -left-[29px] text-[176px] leading-none font-bold text-[#5A5A5A]/10 sm:-left-2 lg:-left-6 mw:-left-8">{id}</span>
    <p className="text-[18px] font-medium tracking-[.05em] ml-auto max-lg:w-[91%]">{text}</p>
  </div>
};