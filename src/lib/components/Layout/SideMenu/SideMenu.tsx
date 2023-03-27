import { FC } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { countriesApi } from 'lib/services';
import { StyledSideMenu, StyledList, StyledListItem } from './SideMenu.styled';

interface IResponse {
  name: { common: string };
  flags: { svg: string };
}

export const SideMenu: FC = () => {
  const data = useLoaderData() as IResponse[];

  return (
    <StyledSideMenu>
      <nav>
        <StyledList>
          {data.map(({ name: { common: commonName }, flags: { svg: url } }) => (
            <StyledListItem key={commonName}>
              <NavLink to={`/country/${commonName}`}>
                <img src={url} alt='' />
                {commonName}
              </NavLink>
            </StyledListItem>
          ))}
        </StyledList>
      </nav>
    </StyledSideMenu>
  );
};

export const loader = () => countriesApi.get('all');
