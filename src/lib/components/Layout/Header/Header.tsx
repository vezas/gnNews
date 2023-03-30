import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTheme, toggleModal, toggleListVariant } from 'lib/store';
import { Heading } from 'lib/components/Typography';
import { Button, ToggleButton } from 'lib/components/UI';
import { ReactComponent as SunIcon } from 'lib/assets/svg/sun.svg';
import { ReactComponent as MoonIcon } from 'lib/assets/svg/moon.svg';
import { ReactComponent as TilesIcon } from 'lib/assets/svg/tiles.svg';
import { ReactComponent as ListIcon } from 'lib/assets/svg/list.svg';
import { StyledHeader, StyledList } from './Header.styled';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(({ ui }: RootState) => ui.themeMode);
  const variant = useSelector(({ ui }: RootState) => ui.variant);

  const changeTheme = () => dispatch(toggleTheme());
  const openModal = () => dispatch(toggleModal(true));
  const changeListVariant = () => dispatch(toggleListVariant());

  return (
    <StyledHeader>
      <Link to='/'>
        <Heading level='h1'>gnNews</Heading>
      </Link>
      <nav>
        <StyledList>
          <li>
            <Button onClick={openModal}>Open</Button>
          </li>
          <li>
            <ToggleButton onClick={changeListVariant}>
              {variant === 'list' ? <TilesIcon /> : <ListIcon />}
            </ToggleButton>
          </li>

          <li>
            <ToggleButton onClick={changeTheme}>
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </ToggleButton>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
