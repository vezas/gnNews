import styled from 'styled-components';

interface WrapperProps {
  variant: string;
}

export const Wrapper = styled.section<WrapperProps>`
  padding: ${({ theme }) => theme.layout.gapSmall};
  display: grid;
  grid-template-columns: ${({ variant }) =>
    variant === 'list' ? '1fr' : 'repeat(auto-fill, minmax(180px, 300px))'};
  justify-content: center;
  gap: ${({ theme }) => theme.layout.gapSmall};
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
