import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import produce from 'immer';
import { isEmpty as _isEmpty } from 'rambda';
import { map, Observable, of, tap } from 'rxjs';

import { E7Buff, E7Hero } from '../../../../interfaces/e7.interface';
import { ItemSelection } from '../../../../interfaces/selection.interface';
import { GameObject, GameObjectsUIState } from '../../state/game-objects.model';
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

  filter$: Observable<GameObjectsUIState['filter']> = of({
    groups: {},
  });
  currentFilter: GameObjectsUIState['filter'] = {
    groups: {},
  };
  filteredGameObjects$: Observable<GameObject[] | E7Hero[]> = of([]);

  // e7
  public E7Heroes!: E7Hero[];
  e7buffs$: Observable<E7Buff[]> = of([]);
  e7buffSelections: ItemSelection[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameObjectsQuery: GameObjectsQuery,
    private gameObjectsService: GameObjectsService
  ) {}

  ngOnInit(): void {
    this.gameName$ = this.gameObjectsQuery.gameName$;

    this.filter$ = this.gameObjectsQuery.filter$.pipe(
      tap((x) => {
        this.currentFilter = x;
      })
    );

    this.filteredGameObjects$ = this.gameObjectsQuery.filteredGameObjects$;

    this.e7buffs$ = this.gameObjectsQuery.e7buffs$;

    this.route.params
      .pipe(
        map<DashboarddRouteParams, DashboarddRouteParams['gameName']>(
          ({ gameName }) => gameName
        ),
        untilDestroyed(this)
      )
      .subscribe((gameName) => {
        this.gameObjectsService.setGameName(gameName);
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

  async handleE7buffSelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7buffSelections = nextItemSelections;
    const filter: { $all?: string[]; $nin?: string[] } = {
      $all: [],
      $nin: [],
    };
    for (const sel of this.e7buffSelections) {
      if (sel.isSelected) {
        if (sel.not) {
          filter.$nin?.push(sel.itemId);
        } else {
          filter.$all?.push(sel.itemId);
        }
      }
    }
    if (filter.$all?.length === 0) {
      delete filter.$all;
    }
    if (filter.$nin?.length === 0) {
      delete filter.$nin;
    }

    const currentFilter = this.currentFilter;
    const nextFilter = produce(currentFilter, (draft) => {
      const groupName = 'allBuffs.id';
      if (_isEmpty(filter)) {
        delete draft.groups[groupName];
      } else {
        draft.groups[groupName] = filter;
      }
    });
    this.gameObjectsService.setFilter(nextFilter);
  }
}
