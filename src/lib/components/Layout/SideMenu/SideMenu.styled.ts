import styled from 'styled-components';

export const StyledSideMenu = styled.aside`
  padding: ${({ theme }) => theme.layout.gapSmall};
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background};

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.gapSmall};
  list-style: none;
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.font.sizeSmall};
  color: ${({ theme }) => theme.colors.font};
  transition: border-bottom 100ms ease-in-out, transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:has(> a.active) {
    transform: scale(1.15);
    border-bottom: 1px solid ${({ theme }) => theme.colors.font};
    font-weight: ${({ theme }) => theme.font.weightNormal};
  }

  & > a {
    padding: ${({ theme }) => theme.layout.gapLittle};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.layout.gapLittle};
    text-align: center;
    color: currentColor;

    & > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
