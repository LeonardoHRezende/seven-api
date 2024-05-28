import { DatabaseNewsRepository } from "@seven/core/shared/infra/news-repository/news-in-memory-repository";
import { GetTopNewsUseCase } from ".";

describe('Get Top News', () => {
  it('should get top news', async () => {
    const newsRepository = new DatabaseNewsRepository();
    const getTopNewsUseCase = new GetTopNewsUseCase(newsRepository);

    const notice = await getTopNewsUseCase.execute();

    expect(notice).toHaveLength(3);
  });
});