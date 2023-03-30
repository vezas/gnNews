import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-inline: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.layout.gapBig};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 -5px 5px 0 rgba(0 0 0, 0.5);

  grid-area: footer;
`;
