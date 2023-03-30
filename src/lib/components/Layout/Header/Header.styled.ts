import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-inline: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  grid-area: header;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
