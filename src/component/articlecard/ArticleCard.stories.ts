import type { Meta, StoryObj } from '@storybook/react';
import ArticleCard from './ArticleCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleCard> = {
  title: 'Example/ArticleCard',
  component: ArticleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    url: { control: 'text' },
    urlToImage: { control: 'text' },
    publishedAt: { control: 'date' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example data for the story
const exampleArticle = {
  source: {
    id: null,
    name: 'Nhk.or.jp',
  },
  author: null,
  title: '鹿児島県警の情報漏えい事件 警察庁長官「再発防止策を検証」 | NHK - nhk.or.jp',
  description: '鹿児島県警察本部で、元生活安全部長が情報漏えい事件で起訴されるなど問題が相次ぎ、警察庁が今週から特別監察を実施しているこ…',
  url: 'https://www3.nhk.or.jp/news/html/20240627/k10014493671000.html',
  urlToImage: 'https://www3.nhk.or.jp/news/html/20240627/K10014493671_2406271221_0627125324_01_03.jpg',
  publishedAt: '2024-06-27T03:53:22Z',
  content: '',
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ...exampleArticle,
  },
};

export const WithDifferentSource: Story = {
  args: {
    ...exampleArticle,
    source: { id: null, name: 'Different Source' },
    title: 'Another Article Title',
    description: 'This is a different article description.',
  },
};
