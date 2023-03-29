import styled from 'styled-components';

interface StyledHeadingProps {
  as: string;
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-weight: ${({ theme }) => theme.font.weightBold};
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme, as }) => (as === 'h2' ? theme.font.sizeSmall : theme.font.sizeMedium)};
`;
