import { FC, ReactNode } from 'react';
import { StyledModal } from 'lib/components/UI';

interface DetailModalProps {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
}

export const DetailModal: FC<DetailModalProps> = ({ children, isOpen, closeModal }) => (
  <StyledModal onClose={closeModal} open={isOpen}>
    {children}
  </StyledModal>
);
