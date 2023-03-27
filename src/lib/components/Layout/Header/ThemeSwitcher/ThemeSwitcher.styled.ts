import styled from 'styled-components';

export const StyledSwitcher = styled.input`
  opacity: 0;
  position: absolute;
  transform: translate(1000px, -1000px);

  &:focus-visible + label {
    outline: 1px solid ${({ theme }) => theme.sharedColors.accent};
    outline-offset: ${({ theme }) => theme.layout.gapLittle};
    border-radius: ${({ theme }) => theme.layout.radius};
  }

  & + label {
    position: relative;
    padding: ${({ theme }) => theme.layout.gapLittle};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.layout.gapLittle};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.font};
    cursor: pointer;
    transition: all 100ms ease-in-out;
  }

  & + label::before {
    display: inline-block;
    content: '';
    height: 1em;
    aspect-ratio: 2 / 1;
    border-radius: 1em;
    background-color: ${({ theme }) => theme.sharedColors.accent};
  }

  & + label:after {
    display: inline-block;
    content: '';
    height: 0.75em;
    aspect-ratio: 1;
    position: absolute;
    left: 35%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1.5em;
    background-color: ${({ theme }) => theme.sharedColors.white};
    transition: all 100ms ease-in-out;
  }

  &:checked + label::after {
    transform: translate(100%, -50%);
  }

  & + label > svg {
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  & + label > svg:first-child {
    order: -1;
  }
`;
