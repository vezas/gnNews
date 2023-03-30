import { FC } from 'react';
import { useSelector } from 'react-redux';
import { newsApi } from 'lib/services';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { NewsItem } from 'lib/components/NewsItem';
import { Wrapper } from './NewsList.styled';
import { RootState } from 'lib/store';
import { dataFormatter } from 'lib/utils';

interface IArticle {
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  author: string;
}

interface IResponse {
  articles: IArticle[];
}

export const NewsList: FC = () => {
  const variant = useSelector(({ ui }: RootState) => ui.variant);
  const data = useLoaderData() as IResponse;

  return (
    <Wrapper variant={variant}>
      {data.articles.map(({ title, publishedAt, url: sourceUrl, author, urlToImage }) => {
        const date = dataFormatter(publishedAt);
        return (
          <NewsItem
            key={title}
            title={title}
            author={author}
            sourceUrl={sourceUrl}
            publishedAt={date}
            imgUrl={urlToImage}
            variant={variant}
          />
        );
      })}
    </Wrapper>
  );
};

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { countryId } = params;

  return (
    countryId &&
    newsApi.get(`top-headlines?country=${countryId}&apiKey=${import.meta.env.VITE_API_KEY}`)
  );
};
