import { InMemoryNewsRepository } from "@seven/core/shared/infra/user-repository/user-in-memory-repository";
import { GetNewsByIdUseCase } from ".";

describe('Get New By Id', () => {
  it('should get new by id', async () => {
    const newsRepository = new InMemoryNewsRepository();
    const getNewsByIdUseCase = new GetNewsByIdUseCase(newsRepository);

    const notice = await getNewsByIdUseCase.execute('id');

    expect(notice).toHaveProperty('id');
  });
});