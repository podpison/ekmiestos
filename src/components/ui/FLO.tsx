type Props = {
  text: string
}

//FLO - the first letter is orange
export const FLO: React.FC<Props> = ({ text }) => {
  let splited = text.split('');

  return <>
    <span className="text-orange">{splited.slice(0, 1)}</span>
    <span>{splited.slice(1)}</span>
  </>
};