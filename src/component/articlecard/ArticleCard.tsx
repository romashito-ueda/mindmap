import React from 'react';
import styled from 'styled-components';

export interface ArticleCardProps {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 16px 0;
`;

const Source = styled.p`
  font-size: 0.9em;
  color: #555;
`;

const Description = styled.p`
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(1.5em * 3); /* line-height の 1.5 倍 × 3 行 */
  line-height: 1.5;
  white-space: normal;
`;

const ReadMore = styled.a`
  color: #1e90ff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PublishedAt = styled.p`
  font-size: 0.8em;
  color: #999;
`;

const ArticleCard: React.FC<ArticleCardProps> = ({ source, title, description, url, urlToImage, publishedAt }) => {
	const placeholderImage = "https://via.placeholder.com/300x169.png?text=No+Image";

  return (
    <Card>
      <Image src={urlToImage || placeholderImage}
					alt={title}
					onError={(e) => {
						(e.target as HTMLImageElement).src = placeholderImage;
					}}
			/>
      <Title>{title}</Title>
      <Source>Source: {source.name}</Source>
      <Description>{description}</Description>
      <ReadMore href={url} target="_blank" rel="noopener noreferrer">Read more</ReadMore>
      <PublishedAt>Published at: {new Date(publishedAt).toLocaleString()}</PublishedAt>
    </Card>
  );
};

export default ArticleCard;
