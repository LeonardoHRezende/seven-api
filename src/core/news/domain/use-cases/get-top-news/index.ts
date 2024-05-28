import { NotFoundException } from "@nestjs/common";
import { NewsEntity } from "@seven/core/shared/entities/news/news";
import { NewsRepository } from "@seven/core/shared/repositories/news-repository";


export class GetTopNewsUseCase {
  constructor(private readonly newsRepository: NewsRepository) {}

  async execute() {
    try {
      console.log(this.newsRepository);
      const newsPropsArray = await this.newsRepository.getTopNews();

      if (!newsPropsArray || newsPropsArray.length === 0) {
        throw new NotFoundException('News not found');
      }

      return newsPropsArray.map(newsProps => new NewsEntity(newsProps).toJSON());
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
