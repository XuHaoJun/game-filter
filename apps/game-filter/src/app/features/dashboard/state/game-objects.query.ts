import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { GameObjectsState, GameObjectsStore } from './game-objects.store';

@Injectable()
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}
