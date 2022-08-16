import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

type GameObject = Record<string, any>;

export interface GameObjectsState extends EntityState<GameObject, number> {
  gameName: string;
  filter: any;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-objects', idKey: '_id' })
export class GameObjectsStore extends EntityStore<GameObjectsState> {
  constructor() {
    super({ filter: {} });
  }
}
