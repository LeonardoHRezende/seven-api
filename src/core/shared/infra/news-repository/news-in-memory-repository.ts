import { NewsHighLightContent, NewsProps, NewsRepository } from "@seven/core/shared/repositories/news-repository";
import { IN_MEMORY_DB } from "./in-memory-db";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class DatabaseNewsRepository implements NewsRepository {
  private news: NewsProps[] = IN_MEMORY_DB;

  async getTopNews(): Promise<NewsHighLightContent[]> {
    const sortedNews = this.news.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    const topNews = sortedNews.slice(0, 3).map(news => ({
      slug: news.slug,
      title: news.title,
      coverImage: news.coverImage,
      theme: news.theme,
      contentHighlight: news.contentHighlight,
      themeColor: news.themeColor
    }));

    return topNews;
  }

  async getNewsBySlug(slug: string): Promise<NewsProps> {
    const news = this.news.find(news => news.slug === slug);
    if (!news) throw new NotFoundException('News not found');
    return news;
  }

  async getNewsHighLight(page: number): Promise<NewsHighLightContent[]> {
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return this.news.slice(start, end).map(news => ({
      slug: news.slug,
      title: news.title,
      coverImage: news.coverImage,
      theme: news.theme,
      contentHighlight: news.contentHighlight,
      themeColor: news.themeColor
    }));
  }
}
