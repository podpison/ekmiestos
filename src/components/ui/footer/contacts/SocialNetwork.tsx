type Props = {
  src: string
  to: string
}

export const SocialNetwork: React.FC<Props> = ({ src, to }) => {
  return <a className="transition-opacity hover:opacity-80" href={to} target='_blank' rel='noreferrer'>
    <img src={src} />
  </a>
};