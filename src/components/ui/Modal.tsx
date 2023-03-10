import cn from 'classnames';

type Props = {
  children: React.ReactNode
  isOpen: boolean
  closeModal: () => void
}

export const Modal: React.FC<Props> = ({ children, isOpen, closeModal }) => {
  return <div className={cn("flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 transition-all", !isOpen && 'opacity-0 invisible')}>
    <div className='absolute w-screen h-screen left-0 top-0 bg-[#181818]/70' style={{ backdropFilter: 'blur(4.5px)' }} onClick={closeModal} />
    <div className="relative">
      <svg
        className="absolute right-1 top-1 z-10 cursor-pointer"
        onClick={closeModal}
        width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L27 27M27 1L1 27" stroke="#959595" />
      </svg>
      {children}
    </div>
  </div>
};