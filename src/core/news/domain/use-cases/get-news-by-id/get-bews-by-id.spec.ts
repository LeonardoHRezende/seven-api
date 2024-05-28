
import { DatabaseNewsRepository } from "@seven/core/shared/infra/news-repository/news-in-memory-repository";
import { GetNewsByIdUseCase } from ".";

describe('Get New By Id', () => {
  it('should get new by id', async () => {
    const newsRepository = new DatabaseNewsRepository();
    const getNewsByIdUseCase = new GetNewsByIdUseCase(newsRepository);

    const notice = await getNewsByIdUseCase.execute('1');

    expect(notice).toHaveProperty('id');
  });
});