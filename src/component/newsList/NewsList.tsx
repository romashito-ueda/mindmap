// src/components/NewsList.tsx
import React, { useState } from 'react';
import { fetchTopHeadlines } from '../../api/newsApi';
import ArticleList from '../articlelist/ArticleList';
import { ArticleCardProps } from '../articlecard/ArticleCard';

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<ArticleCardProps[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getNews = async () => {
    setRefreshing(true);
    try {
      const result = await fetchTopHeadlines({country: 'jp'});
      setArticles(result);
      setRefreshing(false);
    } catch (e) {
      setRefreshing(false);
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Top Headlines</h1>
      <button onClick={getNews} disabled={refreshing}>
        Fetch News
      </button>
      {refreshing && <p>Loading...</p>}
      <ul>
        <ArticleList articles={articles} />
      </ul>
    </div>
  );
};

export default NewsList;
