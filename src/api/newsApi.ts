// src/api/newsApi.ts
import axios, { AxiosRequestConfig } from 'axios';
import { NewsArticle } from './newsArticleType';
import { ArticleCardProps } from '../component/articlecard/ArticleCard';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

interface FetchTopHeadlinesParams {
  country?: string;
  category?: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export const fetchTopHeadlines = async (params: FetchTopHeadlinesParams): Promise<ArticleCardProps[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        ...params,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching the news articles:', error);
    throw error;
  }
};

interface FetchEverythingParams {
  q: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
}

export const fetchEverything = async (params: FetchEverythingParams, config: AxiosRequestConfig = {}): Promise<NewsArticle[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      ...config,
      params: {
        ...params,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching the news articles:', error);
    throw error;
  }
};