import { getTapeColorName } from '@src/app/_functions/getTapeColorName';

describe('getTapeColorName について', () => {
  it.each([
    { num: 0, color: 'pinkPlaid' },
    { num: 1, color: 'yellowStripe' },
    { num: 2, color: 'greenDot' },
    { num: 3, color: 'purple' },
    { num: 4, color: 'pinkPlaid' },
    { num: 101, color: 'yellowStripe' },
  ])('特定の順番で色名が返される', ({ num, color }) => {
    const target = getTapeColorName(num);

    expect(target).toEqual(color);
  });
});
