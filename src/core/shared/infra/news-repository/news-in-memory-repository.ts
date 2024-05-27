import { NewsHighLightContent, NewsProps, NewsRepository } from "@seven/core/shared/repositories/news-repository";
import { IN_MEMORY_DB } from "./in-memory-db";
import { NotFoundException } from "@nestjs/common";

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
    const news = this.news.find(news => news.id === id);
    if (!news) throw new NotFoundException('News not found');
    return news;
  }

  async getNewsHighLight(page: number): Promise<NewsHighLightContent[]> {
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return this.news.slice(start, end).map(news => ({
      title: news.title,
      coverImage: news.coverImage,
      theme: news.theme,
      contentHighlight: news.contentHighlight,
    }));
  }
}
