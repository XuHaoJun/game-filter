import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable, of } from 'rxjs';

import { GameObjectsQuery } from '../../state/game-objects.query';
import { GameObjectsService } from '../../state/game-objects.service';

interface DashboarddRouteParams {
  gameName?: string;
}

@UntilDestroy()
@Component({
  selector: 'game-filter-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomePageComponent implements OnInit, OnDestroy {
  gameName$: Observable<DashboarddRouteParams['gameName']> = of(undefined);

  constructor(
    private route: ActivatedRoute,
    private gameObjectsQuery: GameObjectsQuery,
    private gameObjectsService: GameObjectsService
  ) {}

  ngOnInit(): void {
    this.gameName$ = this.gameObjectsQuery.gameName$;
    this.route.params
      .pipe(
        map<DashboarddRouteParams, DashboarddRouteParams['gameName']>(
          ({ gameName }) => gameName
        ),
        untilDestroyed(this)
      )
      .subscribe((gameName) => {
        this.gameObjectsService.setGameName(gameName);
        this.gameObjectsService.setTableDisplayColumns(['name', 'rarity', 'attribute', 'role']);
        if (gameName === 'e7') {
          this.gameObjectsService
            .getGameObjects(gameName, 'heroes')
            .pipe(untilDestroyed(this))
            .subscribe();
        }
      });
  }

  ngOnDestroy(): void {
    this.gameObjectsService.resetUIState();
    this.gameObjectsService.removeGameObjects();
  }
}
