import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const StyledModal = styled(Popup)`
  &-overlay {
    backdrop-filter: blur(5px);
  }

  &-content {
    padding: ${({ theme }) => theme.layout.gapMedium};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.gapMedium};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.layout.radius};
  }
`;

export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  width: 1em;
  height: 1em;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;
