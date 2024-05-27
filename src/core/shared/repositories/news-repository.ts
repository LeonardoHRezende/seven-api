export interface NewsRepository {
  getTopNews(): Promise<NewsHighLightContent[]>;
  getNewsById(id: string): Promise<NewsProps>;
  getNewsHighLight(page: number): Promise<NewsHighLightContent[]>;
}

export interface NewsHighLightContent extends Pick<NewsProps, 'title' | 'coverImage' | 'theme' | 'contentHighlight'> {}

export interface NewsProps {
  id: string;
  theme: string;
  title: string;
  coverImage: string;
  resume: string;
  content: Paragraph[];
  contentHighlight: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
}

export interface Paragraph {
  content: string;
}