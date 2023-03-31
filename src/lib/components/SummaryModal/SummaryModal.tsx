import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleModal } from 'lib/store';
import { ToggleButton, StyledModal } from 'lib/components/UI';
import { Heading, StyledParagraph } from 'lib/components/Typography';
import { ReactComponent as CloseIcon } from 'assets/svg/close-square.svg';
import { difficulties, funs } from './data';
import { ContentGroup, StyledList, SummaryGroup } from './SummaryModal.styled';

export const SummaryModal: FC = () => {
  const isModalOpened = useSelector(({ ui }: RootState) => ui.isModalOpened);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(toggleModal(false));

  return (
    <StyledModal modal open={isModalOpened} onClose={closeModal}>
      <ContentGroup>
        <Heading level='h3'>Summary</Heading>
        <ToggleButton onClick={closeModal}>
          <CloseIcon />
        </ToggleButton>
        <SummaryGroup>
          <div>
            <Heading level='h4'>Difficulties</Heading>
            <StyledList>
              {difficulties.map((item) => (
                <StyledParagraph as='li' key={item}>
                  {item}
                </StyledParagraph>
              ))}
            </StyledList>
          </div>
          <div>
            <Heading level='h4'>Funs</Heading>
            <StyledList>
              {funs.map((item) => (
                <StyledParagraph as='li' key={item}>
                  {item}
                </StyledParagraph>
              ))}
            </StyledList>
          </div>
        </SummaryGroup>
      </ContentGroup>
    </StyledModal>
  );
};
