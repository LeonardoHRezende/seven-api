import { DatabaseNewsRepository } from "@seven/core/shared/infra/news-repository/news-in-memory-repository";
import { GetNewsHighLightUseCase } from ".";

describe('Get Highlight News', () => {
  it('should get highlight news', async () => {
    const newsRepository = new DatabaseNewsRepository();
    const getNewsHighLight = new GetNewsHighLightUseCase(newsRepository);

    const notice = await getNewsHighLight.execute(1);

    expect(notice).toHaveLength(3);
  });
});