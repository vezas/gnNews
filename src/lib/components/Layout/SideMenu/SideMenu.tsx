import { FC } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { countriesApi } from 'lib/services';
import { countriesList } from './data';
import { StyledSideMenu, StyledList, StyledListItem } from './SideMenu.styled';

interface IResponse {
  name: { common: string };
  flags: { svg: string; alt: string };
  cca2: string;
}

export const SideMenu: FC = () => {
  const data = useLoaderData() as IResponse[];

  return (
    <StyledSideMenu>
      <nav>
        <StyledList>
          {data.map(({ name: { common: commonName }, flags: { svg: url, alt }, cca2 }) => (
            <StyledListItem key={commonName}>
              <NavLink to={`/country/${cca2}`}>
                <img src={url} alt={alt || `${commonName} flag`} />
                {commonName}
              </NavLink>
            </StyledListItem>
          ))}
        </StyledList>
      </nav>
    </StyledSideMenu>
  );
};

export const loader = () => countriesApi.get(`alpha?codes=${countriesList.join(',')}`);
