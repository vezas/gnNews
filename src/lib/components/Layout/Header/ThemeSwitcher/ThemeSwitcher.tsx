import { FC } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { toggleTheme } from 'lib/store/ui-slice';
import { ReactComponent as MoonIcon } from 'lib/assets/moon.svg';
import { ReactComponent as SunIcon } from 'lib/assets/sun.svg';
import { StyledSwitcher } from './ThemeSwitcher.styled';

export const ThemeSwitcher: FC = () => {
  const dispatch = useDispatch();
  const changeTheme = () => dispatch(toggleTheme());

  return (
    <>
      <StyledSwitcher id='theme-switcher' onChange={changeTheme} type='checkbox'></StyledSwitcher>
      <label htmlFor='theme-switcher'>
        <MoonIcon />
        <SunIcon />
      </label>
    </>
  );
};
