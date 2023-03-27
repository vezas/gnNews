import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-weight: ${({ theme }) => theme.font.weightLight};
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.font.sizeSmall};
`;
