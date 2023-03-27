import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-inline: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.sharedColors.accent};

  grid-area: header;
`;
