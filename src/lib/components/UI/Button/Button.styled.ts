import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.8em 1.5em;
  background-color: ${({ theme }) => theme.sharedColors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.layout.radius};
  font-size: ${({ theme }) => theme.font.sizeSmall};
  font-family: inherit;
  color: ${({ theme }) => theme.sharedColors.white};
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ToggleButton = styled.button`
  padding: 0.5em;
  aspect-ratio: 1;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.font.sizeMedium};
  color: ${({ theme }) => theme.colors.font};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  & > svg {
    height: 1em;
    width: 1em;
  }
`;
