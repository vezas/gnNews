import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { StyledModal } from 'lib/components/UI';

interface DetailModalProps {
  children: ReactNode;
  closeModal: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const DetailModal: FC<DetailModalProps> = ({ children, isOpen, closeModal }) => (
  <StyledModal onClose={() => closeModal} open={isOpen}>
    {children}
  </StyledModal>
);
