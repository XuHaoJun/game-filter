import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, share, tap } from 'rxjs';
import {
  E7Buff,
  E7Hero,
  E7HeroesResponse,
  E7SimpleHero
} from '../interfaces/e7.interface';

import { GameObjectsStore } from './game-objects.store';

@Injectable({ providedIn: 'root' })
export class GameObjectsService {
  constructor(
    private gameObjectsStore: GameObjectsStore,
    private http: HttpClient
  ) {}

  setGameName(gameName?: string) {
    this.gameObjectsStore.updateUI({
      gameName,
    });
  }

  setTableDisplayColumns(tableDisplayColumns: string[]) {
    this.gameObjectsStore.updateUI({
      tableDisplayColumns,
    });
  }

  resetUIState() {
    this.gameObjectsStore.resetUI();
  }

  getGameObjects(
    gameName: string,
    category: string
  ): Observable<E7HeroesResponse> {
    switch (gameName) {
      case 'e7': {
        this.gameObjectsStore.setLoading(true);
        return this.http
          .get<E7HeroesResponse>(`/api/games/e7/${category}`)
          .pipe(
            tap((heroesRes) => {
              this.gameObjectsStore.add(
                heroesRes.heroes.map((x) =>
                  simpleHeroToHero(x, heroesRes.buffs)
                )
              );
            }),
            share()
          );
      }
      default: {
        return of();
      }
    }
  }

  removeGameObjects() {
    this.gameObjectsStore.remove();
  }
}

function simpleHeroToHero(x: E7SimpleHero, buffs: E7Buff[]): E7Hero {
  const getBuff = (bid: string) => buffs.find((b) => b.id === bid);
  const toBuffs = (bids: string[]) =>
    bids.map(getBuff).filter((b) => b !== undefined) as E7Buff[];

  return {
    ...x,
    buffs: toBuffs(x.buffs),
    debuffs: toBuffs(x.debuffs),
    common: toBuffs(x.common),
  };
}
