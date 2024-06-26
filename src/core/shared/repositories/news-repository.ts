export interface NewsRepository {
  getTopNews(): Promise<NewsHighLightContent[]>;
  getNewsBySlug(slug: string): Promise<NewsProps>;
  getNewsHighLight(page: number): Promise<NewsHighLightContent[]>;
}

export interface NewsHighLightContent extends Pick<NewsProps, 'slug' | 'title' | 'coverImage' | 'theme' | 'themeColor' | 'contentHighlight'> {}

export interface NewsProps {
  id: string;
  slug: string;
  theme: string;
  themeColor: string;
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