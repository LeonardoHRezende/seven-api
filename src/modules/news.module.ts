import { Module } from '@nestjs/common';
import { NewsController } from '@seven/controllers/news.controller';
import { GetNewsByIdUseCase } from '@seven/core/news/domain/use-cases/get-news-by-id';
import { GetNewsHighLightUseCase } from '@seven/core/news/domain/use-cases/get-news-high-light';
import { GetTopNewsUseCase } from '@seven/core/news/domain/use-cases/get-top-news';
import { InMemoryNewsRepository } from '@seven/core/shared/infra/news-repository/news-in-memory-repository'; // Ajuste o caminho conforme necessário
import { NewsService } from '@seven/services/news.service';

@Module({
  providers: [
    NewsService,
    GetNewsByIdUseCase,
    GetNewsHighLightUseCase,
    GetTopNewsUseCase,
    InMemoryNewsRepository,
  ],
  controllers: [NewsController],
})
export class NewsModule { }
