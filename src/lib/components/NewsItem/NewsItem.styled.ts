import styled from 'styled-components';
import { Button } from 'lib/components/UI';

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

export const StyledLink = styled(Button)`
  transition: all 100ms ease-in-out;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.font};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: transparent;
  }
`;

export const ContentGroup = styled.div`
  width: 50vw;
  max-width: 500px;
  max-height: 500px;
  display: grid;
  gap: ${({ theme }) => theme.layout.gapSmall};
  align-items: center;

  img {
    object-fit: cover;
    height: 180px;
    width: 100%;
    border-radius: ${({ theme }) => theme.layout.radius};
  }
`;
