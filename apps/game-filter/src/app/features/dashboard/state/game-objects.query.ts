import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import * as R from 'rambda';
import { flatten as _flatten } from 'rambda';
import { combineLatest, map } from 'rxjs';
import sift from 'sift';

import { E7Buff, E7Hero } from '../../../interfaces/e7.interface';
import { GameObjectsState } from './game-objects.model';
import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  gameName$ = this.select((state) => state.ui.gameName);
  filter$ = this.select((state) => state.ui.filter);
  filteredGameObjects$ = combineLatest([this.filter$, this.selectAll()]).pipe(
    map(([filter, gameObjects]) => {
      const filters: any[] = [];
      for (const groupName in filter.groups) {
        filters.push({ [groupName]: filter.groups[groupName] });
      }
      const mquery = filters.length > 0 ? { $and: filters } : {};
      const tester = sift(mquery);
      return gameObjects.filter(tester);
    })
  );

  e7buffs$ = this.select().pipe(
    map<GameObjectsState, E7Buff[]>((state) => {
      if (state.ui.gameName !== 'e7') {
        return [];
      } else {
        const heroes = (state.entities || {}) as HashMap<E7Hero>;
        return R.pipe(
          R.values,
          R.map<E7Hero, E7Buff[]>((h: E7Hero) => R.uniq(h.allBuffs)),
          _flatten<E7Buff>,
          R.uniq
        )(heroes);
      }
    })
  );

  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}
