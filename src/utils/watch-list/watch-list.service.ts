export abstract class WatchListService<T> {
  private values: Map<string, T>;
  private ids: Map<string, Date>;

  constructor() {
    this.values = new Map<string, T>();
    this.ids = new Map<string, Date>();
  }

  abstract id(value: T): string;

  add(value: T): void {
    const id = this.id(value);
    this.ids.set(id, new Date());
    this.values.set(id, value);
  }

  remove(value: T): void {
    const id = this.id(value);
    this.ids.delete(id);
    this.values.delete(id);
  }

  update(values: T[]): void {
    values.forEach(this.add.bind(this));
  }

  removeOlderThan(date: Date): void {
    this.ids.forEach((expireDate, key) => {
      if (expireDate < date) {
        const value = this.values.get(key);
        this.remove(value);
      }
    });
  }

  getAll(): T[] {
    return Array.from(this.values.values());
  }
}
