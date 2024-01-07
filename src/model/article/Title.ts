const symbolTitle = Symbol('Title');

export class Title {
  readonly symbol: typeof symbolTitle = symbolTitle;

  private readonly value: string;

  constructor(value: unknown) {
    if (typeof value !== 'string') {
      throw new Error();
    }

    this.value = value;
  }

  get() {
    return this.value;
  }
}
