import { NewsHighLightContent, NewsProps, NewsRepository } from "@seven/core/shared/repositories/news-repository";
import { IN_MEMORY_DB } from "./in-memory-db";

export class InMemoryNewsRepository implements NewsRepository {
  constructor(private readonly news: NewsProps[] = IN_MEMORY_DB) {}

  async getTopNews(): Promise<NewsHighLightContent[]> {
    return this.news.map(news => ({
      title: news.title,
      coverImage: news.coverImage,
      theme: news.theme,
      contentHighlight: news.contentHighlight,
    }));
  }

  async getNewsById(id: string): Promise<NewsProps> {
    return this.news.find(news => news.id === id);
  }

  async getNewsHighLight(page: number): Promise<NewsHighLightContent[]> {
    return this.news.map(news => ({
      title: news.title,
      coverImage: news.coverImage,
      theme: news.theme,
      contentHighlight: news.contentHighlight,
    }));
  }
}