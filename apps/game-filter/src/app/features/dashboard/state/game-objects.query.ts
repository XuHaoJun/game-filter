import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { GameObjectsState, GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  gameName$ = this.select((x) => x.ui.gameName);

  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}
