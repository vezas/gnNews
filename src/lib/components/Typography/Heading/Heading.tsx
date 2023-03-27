import { FC, ReactNode, ElementType } from 'react';
import { StyledHeading } from './Heading.styled';

interface HeadingProps {
  children: ReactNode;
  level: ElementType;
}

export const Heading: FC<HeadingProps> = ({ children, level }) => (
  <StyledHeading as={level}>{children}</StyledHeading>
);
