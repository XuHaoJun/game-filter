import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { fromInput } from 'observable-from-input';
import { combineLatest, map, Observable, of } from 'rxjs';

import { GameObjectsService } from '../../features/dashboard/state/game-objects.service';
import type { GameInfo } from '../../states/game-infos/game-infos.model';

interface GameLink extends GameInfo {
  routerLink: string;
  ui: {
    isActive: boolean;
    id: string;
  };
}

@UntilDestroy()
@Component({
  selector: 'game-filter-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  @Input() gameName?: string;
  gameName$: Observable<string | undefined> = of(undefined);

  @Input() gameInfos: GameInfo[] = [];
  gameInfos$: Observable<GameInfo[]> = of([]);

  gameLinks$: Observable<GameLink[]> = of([]);

  constructor(private gameObjectsService: GameObjectsService) {
    this.gameName$ = fromInput<MainLayoutComponent>(this)('gameName');
    this.gameInfos$ = fromInput<MainLayoutComponent>(this)('gameInfos');
  }

  ngOnInit(): void {
    this.gameLinks$ = combineLatest([this.gameName$, this.gameInfos$]).pipe(
      map(([gameName, gameInfos]) =>
        gameInfos.map((g) => ({
          ...g,
          routerLink: `/games/${g.name}`,
          ui: {
            isActive: gameName === g.name,
            id: `navbar-games-${g.name}`,
          },
        }))
      )
    );
  }
}
