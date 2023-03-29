import { FC } from 'react';
import { useSelector } from 'react-redux';
import { newsApi } from 'lib/services';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { NewsItem } from './NewsItem';
import { Wrapper } from './NewsList.styled';
import { RootState } from 'lib/store';

interface IArticle {
  title: string;
  publishedAt: string;
  url: string;
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
      {data.articles.map(({ title, publishedAt, url: sourceUrl, author }) => (
        <NewsItem
          key={title}
          title={title}
          author={author}
          sourceUrl={sourceUrl}
          publishedAt={publishedAt}
        />
      ))}
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
