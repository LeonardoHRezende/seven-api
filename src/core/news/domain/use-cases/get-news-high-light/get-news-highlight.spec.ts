import { InMemoryNewsRepository } from "@seven/core/shared/infra/user-repository/user-in-memory-repository";
import { GetNewsHighLightUseCase } from ".";

describe('Get Highlight News', () => {
  it('should get highlight news', async () => {
    const newsRepository = new InMemoryNewsRepository();
    const getNewsHighLight = new GetNewsHighLightUseCase(newsRepository);

    const notice = await getNewsHighLight.execute(1);

    expect(notice).toHaveLength(3);
  });
});