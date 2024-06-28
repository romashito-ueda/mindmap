import React from 'react';
import styled from 'styled-components';
import ArticleCard, { ArticleCardProps } from '../articlecard/ArticleCard';

interface ArticleListProps {
  articles: ArticleCardProps[];
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ListContainer>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </ListContainer>
  );
};

export default ArticleList;
