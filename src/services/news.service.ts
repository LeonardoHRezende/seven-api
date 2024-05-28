import { Injectable } from '@nestjs/common';
import { GetNewsBySlugUseCase } from '@seven/core/news/domain/use-cases/get-news-by-id';
import { GetNewsHighLightUseCase } from '@seven/core/news/domain/use-cases/get-news-high-light';
import { GetTopNewsUseCase } from '@seven/core/news/domain/use-cases/get-top-news';
import { DatabaseNewsRepository } from '@seven/core/shared/infra/news-repository/news-in-memory-repository';
import { NewsHighLightContent, NewsProps } from '@seven/core/shared/repositories/news-repository';

@Injectable()
export class NewsService {
  private databaseNewsRepository = new DatabaseNewsRepository();

  async getNewsBySlug(id: string): Promise<NewsProps> {
    const getNewsBySlugUseCase = new GetNewsBySlugUseCase(this.databaseNewsRepository);
    const newsEntity = await getNewsBySlugUseCase.execute(id);
    return newsEntity;
  }

  async getNewsHighLight(page: number): Promise<NewsHighLightContent[]> {
    const getNewsHighLightUseCase = new GetNewsHighLightUseCase(this.databaseNewsRepository);
    const newsHighlights = await getNewsHighLightUseCase.execute(page);
    return newsHighlights;
  }

  async getTopNews(): Promise<NewsHighLightContent[]> {
    const getTopNewsUseCase = new GetTopNewsUseCase(this.databaseNewsRepository);
    const topNews = await getTopNewsUseCase.execute();
    return topNews;
  }
}
