import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationsWatchListService {
  private values: Map<string, Date>;
  constructor() {
    this.values = new Map<string, Date>();
  }

  add(id: string): void {
    this.values.set(id, new Date());
  }

  remove(id: string): void {
    this.values.delete(id);
  }

  update(ids: string[]): void {
    ids.forEach((id) => this.values.set(id, new Date()));
  }

  removeOlderThan(date: Date): void {
    this.values.forEach((value, key) => {
      if (value < date) this.values.delete(key);
    });
  }

  getAll(): string[] {
    return Array.from(this.values.keys());
  }
}
