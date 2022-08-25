import { Injectable } from '@angular/core';

import { GameInfosStore } from './game-infos.store';

@Injectable({ providedIn: 'root' })
export class GameInfosService {
  constructor(private gameInfosStore: GameInfosStore) {}
}
