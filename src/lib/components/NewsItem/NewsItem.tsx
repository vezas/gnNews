import { FC, useState } from 'react';
import { Heading, StyledParagraph } from 'lib/components/Typography';
import { StyledModal } from 'lib/components/UI';
import NoPicutesIcon from 'lib/assets/images/no-pictures.png';
import { ContentGroup, DetailCard, DetailsGroup, StyledLink } from './NewsItem.styled';

interface NewsItemProps {
  title: string;
  author: string;
  sourceUrl: string;
  publishedAt: string;
  imgUrl: string;
  variant: string;
}

export const NewsItem: FC<NewsItemProps> = ({
  title,
  author,
  sourceUrl,
  publishedAt,
  imgUrl,
  variant
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <DetailCard onClick={openModal}>
        {variant === 'tiles' && <img src={imgUrl || NoPicutesIcon} alt='Article image' />}
        <Heading level='h2'>{title}</Heading>
        <DetailsGroup>
          <StyledParagraph color='secondary'>{author || 'no source'}</StyledParagraph>
          <StyledParagraph color='secondary'>{publishedAt}</StyledParagraph>
        </DetailsGroup>

        <StyledModal modal open={isModalOpened} onClose={closeModal}>
          <ContentGroup>
            {imgUrl && <img src={imgUrl} alt='Article image' />}
            <Heading level='h2'>{title}</Heading>
            <DetailsGroup>
              <StyledLink
                as='a'
                href={sourceUrl}
                color='secondary'
                target='_blank'
                rel='noreferrer'
              >
                Go to source &rarr;
              </StyledLink>
              <StyledParagraph color='secondary'>{author || 'no source'}</StyledParagraph>
            </DetailsGroup>
          </ContentGroup>
        </StyledModal>
      </DetailCard>
    </>
  );
};
