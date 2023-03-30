import { FC, useState } from 'react';
import { Heading, StyledParagraph } from 'lib/components/Typography';
import { DetailModal } from 'lib/components/DetailModal';
import NoPicutesIcon from 'lib/assets/no-pictures.png';
import { DetailCard, DetailsGroup } from './NewsItem.styled';

interface NewsItemProps {
  title: string;
  author: string;
  sourceUrl: string;
  publishedAt: string;
  imgUrl: string;
  variant: 'list' | 'tiles';
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

        <DetailModal isOpen={isModalOpened} closeModal={closeModal}>
          {imgUrl && <img src={imgUrl} alt='Article image' />}
          <Heading level='h2'>{title}</Heading>
          <DetailsGroup>
            <StyledParagraph color='secondary'>
              <a href={sourceUrl} target='_blank' rel='noreferrer'>
                Go to source &rarr;
              </a>
            </StyledParagraph>
            <StyledParagraph color='secondary'>Author: {author}</StyledParagraph>
          </DetailsGroup>
        </DetailModal>
      </DetailCard>
    </>
  );
};
