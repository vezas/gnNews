import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledModal, StyledCloseButton } from 'lib/components/UI';
import { RootState, toggleModal } from 'lib/store';
import { ReactComponent as CloseIcon } from 'lib/assets/close-square.svg';

export const AboutModal: FC = () => {
  const isModalOpened = useSelector(({ ui }: RootState) => ui.isModalOpened);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(toggleModal());

  return (
    <StyledModal arrow mouseLeaveDelay={500} modal open={isModalOpened} onClose={closeModal}>
      <StyledCloseButton>
        <CloseIcon />
      </StyledCloseButton>
      About
    </StyledModal>
  );
};
