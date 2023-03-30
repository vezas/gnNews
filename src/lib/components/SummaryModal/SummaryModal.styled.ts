import styled from 'styled-components';

export const ContentGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.layout.gapSmall};
  grid-template-columns: 1fr min-content;
  align-items: center;
`;

export const SummaryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapSmall};
`;

export const StyledList = styled.ul`
  margin-top: ${({ theme }) => theme.layout.gapLittle};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapLittle};
  list-style: none;

  li {
    display: flex;
    align-items: center;
  }

  li:before {
    margin-right: ${({ theme }) => theme.layout.gapLittle};
    display: inline-block;
    content: '';
    height: 0.3em;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.font};
  }
`;
