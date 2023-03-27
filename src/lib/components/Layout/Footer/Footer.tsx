import { FC } from 'react';
import { StyledParagraph } from 'lib/components/Typography';
import { useClock } from './utils';
import { StyledFooter } from './Footer.styled';

export const Footer: FC = () => {
  const clock = useClock();

  return (
    <StyledFooter>
      <StyledParagraph>{clock}</StyledParagraph>
    </StyledFooter>
  );
};
