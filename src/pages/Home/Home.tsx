import { FC } from 'react';
import { Heading, StyledParagraph } from 'lib/components/Typography';
import { Wrapper } from './Home.styled';

export const Home: FC = () => (
  <Wrapper>
    <Heading level='h3'>Welcome to the gnNews</Heading>
    <StyledParagraph>Choose your country to display news</StyledParagraph>
  </Wrapper>
);
