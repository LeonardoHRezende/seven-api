import { Injectable } from '@nestjs/common';
import { GetNewsByIdUseCase } from '@seven/core/news/domain/use-cases/get-news-by-id';
import { GetNewsHighLightUseCase } from '@seven/core/news/domain/use-cases/get-news-high-light';
import { GetTopNewsUseCase } from '@seven/core/news/domain/use-cases/get-top-news';
import { NewsHighLightContent, NewsProps } from '@seven/core/shared/repositories/news-repository';

@Injectable()
export class NewsService {
  constructor(
    private readonly getNewsByIdUseCase: GetNewsByIdUseCase,
    private readonly getNewsHighLightUseCase: GetNewsHighLightUseCase,
    private readonly getTopNewsUseCase: GetTopNewsUseCase,
  ) {}

  async getNewsById(id: string): Promise<NewsProps> {
    const newsEntity = await this.getNewsByIdUseCase.execute(id);
    return newsEntity.toJSON();
  }

  async getNewsHighLight(page: number): Promise<NewsHighLightContent[]> {
    const newsHighlights = await this.getNewsHighLightUseCase.execute(page);
    return newsHighlights;
  }

  async getTopNews(): Promise<NewsHighLightContent[]> {
    const topNews = await this.getTopNewsUseCase.execute();
    return topNews;
  }
}
