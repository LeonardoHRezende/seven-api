import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { NewsHighLightContent, NewsRepository } from "@seven/core/shared/repositories/news-repository";

@Injectable()
export class GetNewsHighLightUseCase {
  constructor(private readonly newsRepository: NewsRepository) {}

  async execute(page: number): Promise<NewsHighLightContent[]> {
    try{
      const news = await this.newsRepository.getNewsHighLight(page);

      if(!news) {
        throw new NotFoundException('News not found');
      }

      return news;
    }
    catch(error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}