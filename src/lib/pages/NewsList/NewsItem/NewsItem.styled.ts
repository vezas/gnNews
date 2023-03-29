import styled from 'styled-components';

export const DetailCard = styled.article`
  padding: ${({ theme }) => theme.layout.gapLittle};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.layout.radius};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapLittle};
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const DetailsGroup = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
