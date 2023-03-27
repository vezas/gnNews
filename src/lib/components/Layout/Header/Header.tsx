import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from 'lib/components/Typography';
import { ThemeSwitcher } from './ThemeSwitcher';
import { StyledHeader } from './Header.styled';

export const Header: FC = () => (
  <StyledHeader>
    <Link to='/'>
      <Heading level='h1'>gnNews</Heading>
    </Link>
    <ThemeSwitcher />
  </StyledHeader>
);
