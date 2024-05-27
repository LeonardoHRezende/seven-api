import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { NewsRepository } from "@seven/core/shared/repositories/news-repository";

@Injectable()
export class GetTopNewsUseCase {
  constructor(private readonly newsRepository: NewsRepository) { }
  async execute() {
    try {
      const news = await this.newsRepository.getTopNews();
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