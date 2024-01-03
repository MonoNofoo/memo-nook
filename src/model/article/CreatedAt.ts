import { format } from 'date-fns';

const symbolCreatedAt = Symbol('CreatedAt');

export class CreatedAt {
  readonly symbol: typeof symbolCreatedAt = symbolCreatedAt;

  readonly value: Date;

  constructor(value: Date) {
    this.value = value;
  }

  formatter() {
    return format(this.value, 'yyyy-MM-dd');
  }
}
