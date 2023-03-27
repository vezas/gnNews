import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-inline: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.sharedColors.accent};

  grid-area: footer;
`;
