import styled from 'styled-components';

interface StyledParagraphProps {
  color?: 'secondary';
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${({ theme }) => theme.font.weightNormal};
  color: ${({ theme, color }) => (color ? theme.colors.fontSecondary : theme.colors.font)};
  font-size: ${({ theme }) => theme.font.sizeSmall};
`;
