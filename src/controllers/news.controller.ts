import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { NewsHighLightContent, NewsProps } from '@seven/core/shared/repositories/news-repository';
import { NewsService } from '@seven/services/news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get(':id')
  async getNewsById(@Param('id') id: string): Promise<NewsProps> {
    try {
      return await this.newsService.getNewsById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get('highlights')
  async getNewsHighLight(@Query('page') page: number): Promise<NewsHighLightContent[]> {
    return await this.newsService.getNewsHighLight(page);
  }

  @Get('top')
  async getTopNews(): Promise<NewsHighLightContent[]> {
    return await this.newsService.getTopNews();
  }
}
