import styled from 'styled-components';

export const DetailCard = styled.article`
  padding: ${({ theme }) => theme.layout.gapLittle};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.layout.radius};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.layout.gapLittle};
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  img {
    border-radius: ${({ theme }) => theme.layout.radius};
    object-fit: cover;
    object-position: center;
    height: 180px;
    width: 100%;
  }
`;

export const DetailsGroup = styled.section`
  margin-top: auto;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.layout.gapLittle};
`;
