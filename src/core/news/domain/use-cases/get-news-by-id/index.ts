import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { NewsProps, NewsRepository } from "@seven/core/shared/repositories/news-repository";

@Injectable()
export class GetNewsByIdUseCase {
  constructor(private readonly newsRepository: NewsRepository) { }

  async execute(id: string): Promise<NewsProps> {
    try {
      const news = await this.newsRepository.getNewsById(id);
      if (!news) {
        throw new NotFoundException('News not found');
      }
      return news;
    }
    catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}