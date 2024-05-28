
import { DatabaseNewsRepository } from "@seven/core/shared/infra/news-repository/news-in-memory-repository";
import { GetNewsBySlugUseCase } from ".";
describe('Get New By Id', () => {
  it('should get new by id', async () => {
    const newsRepository = new DatabaseNewsRepository();
    const getNewsBySlugUseCase = new GetNewsBySlugUseCase(newsRepository);

    const notice = await getNewsBySlugUseCase.execute('1');

    expect(notice).toHaveProperty('id');
  });
});