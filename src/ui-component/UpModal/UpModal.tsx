import { ModalProps } from "./types";
import { ModalContent, ModalOverlay } from "./UpModal.styled";

const UpModal: React.FC<ModalProps> = ({ isOpen, onClick, children }) => {
  if (!isOpen) return null;

  return (
      <ModalOverlay onClick={onClick}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
  );
};

export default UpModal; 