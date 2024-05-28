import { Injectable, NotFoundException } from "@nestjs/common";
import { NewsEntity } from "@seven/core/shared/entities/news/news";
import { NewsProps, NewsRepository } from "@seven/core/shared/repositories/news-repository";

export class GetNewsByIdUseCase {
  constructor(private readonly newsRepository: NewsRepository) {}

  async execute(id: string): Promise<NewsProps> {
    try {
      const newsProps = await this.newsRepository.getNewsById(id);
      if (!newsProps) {
        throw new NotFoundException('News not found');
      }
      return new NewsEntity(newsProps).toJSON();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
