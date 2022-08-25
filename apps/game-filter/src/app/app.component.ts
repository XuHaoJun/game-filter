import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GameObjectsQuery } from './features/dashboard/state/game-objects.query';
import { GameInfo } from './states/game-infos/game-infos.model';
import { GameInfosQuery } from './states/game-infos/game-infos.query';

@Component({
  selector: 'game-filter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'game-filter';

  gameName$: Observable<string | undefined> = of(undefined);
  gameInfos$: Observable<GameInfo[]> = of([]);

  constructor(
    private gameInfosQuery: GameInfosQuery,
    private gameObjectsQuery: GameObjectsQuery
  ) {}

  ngOnInit(): void {
    this.gameInfos$ = this.gameInfosQuery.selectAll();
    this.gameName$ = this.gameObjectsQuery.gameName$;
  }
}
