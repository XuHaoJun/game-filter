import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
