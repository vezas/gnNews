import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.layout.gapSmall};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;
