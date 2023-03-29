import { FC, useState } from 'react';
import { Heading, StyledParagraph } from 'lib/components/Typography';
import { DetailModal } from './DetailModal';
import { DetailCard, DetailsGroup } from './NewsItem.styled';

interface NewsItemProps {
  title: string;
  author: string;
  sourceUrl: string;
  publishedAt: string;
}

export const NewsItem: FC<NewsItemProps> = ({ title, author, sourceUrl, publishedAt }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  return (
    <>
      <DetailCard onClick={openModal}>
        <Heading level='h2'>{title}</Heading>
        <DetailsGroup>
          <StyledParagraph color='secondary'>{author}</StyledParagraph>
          <StyledParagraph color='secondary'>{publishedAt}</StyledParagraph>
        </DetailsGroup>

        <DetailModal isOpen={isModalOpened} closeModal={closeModal}>
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
