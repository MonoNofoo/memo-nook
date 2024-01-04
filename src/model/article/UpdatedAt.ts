const symbolUpdatedAt = Symbol('UpdatedAt');

export class UpdatedAt {
  readonly symbol: typeof symbolUpdatedAt = symbolUpdatedAt;

  private readonly value: Date;

  constructor(value: Date) {
    this.value = value;
  }
}
