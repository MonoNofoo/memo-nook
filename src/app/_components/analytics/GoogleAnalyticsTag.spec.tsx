import { render } from '@testing-library/react';
import GoogleAnalyticsTag from '@src/app/_components/analytics/GoogleAnalyticsTag';

describe('GoogleAnalyticsTag について', () => {
  const originEnv = process.env;
  const setup = async () => render(<GoogleAnalyticsTag />);

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originEnv };
  });

  it('GA 用 ID の env が無い場合は何も表示しない', async () => {
    await setup();
    expect(document.querySelectorAll('#GoogleAnalyticsTag').length).toBe(0);
  });

  it('GA 用 ID の env がある場合は script タグがある', async () => {
    process.env.NEXT_PUBLIC_GA_ID = 'ga-id';
    await setup();
    expect(document.querySelectorAll('#GoogleAnalyticsTag').length).toBe(1);
  });
});
