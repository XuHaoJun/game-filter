import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import * as R from 'rambda';
import { flatten as _flatten } from 'rambda';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';
import sift from 'sift';

import {
  ItemAnalytic,
  ItemIdentity,
  TotalItemAnalytic
} from '../../../interfaces/analytics.interface';
import { E7Buff, E7Hero } from '../../../interfaces/e7.interface';
import { GameObjectFilter, GameObjectsState } from './game-objects.model';
import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsQuery extends QueryEntity<GameObjectsState> {
  gameName$ = this.select((state) => state.ui.gameName);

  filter$ = this.select((state) => state.ui.filter).pipe(
    distinctUntilChanged<GameObjectFilter>(R.equals)
  );
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

  // e7 stuff
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
  e7buffAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.select(),
    this.e7buffs$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([state, e7buffs, _xs]) => {
      if (state.ui.gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(xs, e7buffs, (x, item) =>
          Boolean(x.allBuffs.find((xb) => xb.id === item.id))
        );
      }
    })
  );
  e7roles$ = this.select((state) => state.e7.roles);
  e7roleAnalytics$: Observable<ItemAnalytic[]> = combineLatest([
    this.select(),
    this.e7roles$,
    this.filteredGameObjects$,
  ]).pipe(
    map(([state, e7roles, _xs]) => {
      if (state.ui.gameName !== 'e7') {
        return [];
      } else {
        const xs = _xs as E7Hero[];
        return getE7Analytics(xs, e7roles, (x, item) => x.role === item.id);
      }
    })
  );

  constructor(protected override store: GameObjectsStore) {
    super(store);
  }
}

function getE7Analytics(
  xs: E7Hero[],
  items: ItemIdentity[],
  isHitTester: (x: E7Hero, item: ItemIdentity) => boolean
) {
  const partialAnalytics = items.map((y) => {
    const gameObjectIds = xs.filter((x) => isHitTester(x, y)).map((x) => x.id);
    return {
      itemId: y.id,
      gameObjectIds,
      count: gameObjectIds.length,
    };
  });
  const numItemCount = R.sum(partialAnalytics.map((pa) => pa.count));
  const totalAnalytic: TotalItemAnalytic = {
    numGameObjects: xs.length,
    numItemCount,
  };
  return partialAnalytics.map((pa) => {
    return {
      ...pa,
      usedRate: pa.count / xs.length,
      totalAnalytic,
    };
  });
}
