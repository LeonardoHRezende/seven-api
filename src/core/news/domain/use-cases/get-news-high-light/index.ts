import { Injectable, NotFoundException } from "@nestjs/common";
import { NewsEntity } from "@seven/core/shared/entities/news/news";
import { NewsHighLightContent, NewsRepository } from "@seven/core/shared/repositories/news-repository";


export class GetNewsHighLightUseCase {
  constructor(private readonly newsRepository: NewsRepository) {}

  async execute(page: number): Promise<NewsHighLightContent[]> {
    try {
      const newsPropsArray = await this.newsRepository.getNewsHighLight(page);

      if (!newsPropsArray || newsPropsArray.length === 0) {
        throw new NotFoundException('News not found');
      }

      return newsPropsArray.map(newsProps => new NewsEntity(newsProps).toJSON());
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
