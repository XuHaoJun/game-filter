import { Injectable } from '@angular/core';
import { guid, Query, Store } from '@datorama/akita';

export type E7BoolGroupListState = { filters: Record<string, any>[] };

@Injectable()
export class E7BoolGroupListStore extends Store<E7BoolGroupListState> {
  constructor() {
    super({ filters: [] }, { name: `e7-bool-group-list_${guid()}` });
  }
}

@Injectable()
export class E7BoolGroupListQuery extends Query<E7BoolGroupListState> {
  constructor(protected override store: E7BoolGroupListStore) {
    super(store);
  }
}
