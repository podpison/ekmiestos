import { Modal } from "../Modal";
import { RequestCall } from "../requestCall/RequestCall";

type Props = {
  isOpen: boolean
  closeModal: () => void
}

export const PCModal: React.FC<Props> = (props) => {
  return <Modal {...props}>
    <RequestCall heading="Остались вопросы?" />
  </Modal>
};