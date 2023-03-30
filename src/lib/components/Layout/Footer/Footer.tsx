import { FC } from 'react';
import { StyledParagraph } from 'lib/components/Typography';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store';
import { useClock } from './utils';
import { StyledFooter } from './Footer.styled';

export const Footer: FC = () => {
  const clock = useClock();
  const articlesAmount = useSelector(({ news }: RootState) => news.articleAmount);

  return (
    <StyledFooter>
      <StyledParagraph>Total amount of articles: {articlesAmount}</StyledParagraph>
      <StyledParagraph>{clock}</StyledParagraph>
    </StyledFooter>
  );
};
