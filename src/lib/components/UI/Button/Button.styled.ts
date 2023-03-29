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
