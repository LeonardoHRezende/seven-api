import { Module } from "@nestjs/common";
import { NewsController } from "@seven/controllers/news.controller";
import { NewsService } from "@seven/services/news.service";

@Module({
  providers: [
    NewsService
  ],
  controllers: [NewsController],
})
export class NewsModule {}
