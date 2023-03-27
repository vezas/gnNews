import styled from 'styled-components';

export const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.weightBold};
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.font.sizeLarge};
`;
