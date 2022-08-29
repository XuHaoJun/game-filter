import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as R from 'rambda';
import { combineLatest, map, Observable, of, Subject } from 'rxjs';

import produce from 'immer';
import { ItemAnalytic } from '../../../../interfaces/analytics.interface';
import { E7Buff, E7Hero, E7Role } from '../../../../interfaces/e7.interface';
import { ItemSelection } from '../../../../interfaces/selection.interface';
import { itemSelectionsToFilter } from '../../../../utils/itemSelectionHelpers';
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
  // currentFilter: GameObjectsUIState['filter'] = {
  //   groups: {},
  // };
  filteredGameObjects$: Observable<GameObject[] | E7Hero[]> = of([]);

  // e7
  public E7Heroes!: E7Hero[];
  e7buffs$: Observable<E7Buff[]> = of([]);
  e7buffAnalytics$: Observable<ItemAnalytic[]> = of([]);
  e7buffSelectionsSubject: Subject<ItemSelection[]> = new Subject();
  e7buffSelections$: Observable<ItemSelection[]> =
    this.e7buffSelectionsSubject.asObservable();

  e7roles$: Observable<E7Role[]> = of([]);
  e7roleAnalytics$: Observable<ItemAnalytic[]> = of([]);
  e7roleSelectionsSubject: Subject<ItemSelection[]> = new Subject();
  e7roleSelections$: Observable<ItemSelection[]> =
    this.e7roleSelectionsSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    private gameObjectsQuery: GameObjectsQuery,
    private gameObjectsService: GameObjectsService
  ) {}

  ngOnInit(): void {
    this.gameName$ = this.gameObjectsQuery.gameName$;

    this.filteredGameObjects$ = this.gameObjectsQuery.filteredGameObjects$;

    // e7 stuff
    this.e7buffs$ = this.gameObjectsQuery.e7buffs$;
    this.e7buffAnalytics$ = this.gameObjectsQuery.e7buffAnalytics$;
    this.e7roles$ = this.gameObjectsQuery.e7roles$;
    this.e7roleAnalytics$ = this.gameObjectsQuery.e7roleAnalytics$;
    combineLatest([this.filter$, this.e7buffSelections$])
      .pipe(
        map(([currentFilter, nextItemSelections]) => {
          const filter = itemSelectionsToFilter(nextItemSelections, 'and');
          return produce(currentFilter, (draft) => {
            const groupName = 'allBuffs.id';
            if (R.isEmpty(filter)) {
              delete draft.groups[groupName];
            } else {
              draft.groups[groupName] = filter;
            }
          });
        }),
        untilDestroyed(this)
      )
      .subscribe((nextFilter) => {
        this.gameObjectsService.setFilter(nextFilter);
      });
    combineLatest([this.filter$, this.e7roleSelectionsSubject])
      .pipe(
        map(([currentFilter, nextItemSelections]) => {
          const filter = itemSelectionsToFilter(nextItemSelections, 'or');
          return produce(currentFilter, (draft) => {
            const groupName = 'role';
            if (R.isEmpty(filter)) {
              delete draft.groups[groupName];
            } else {
              draft.groups[groupName] = filter;
            }
          });
        })
      )
      .subscribe((nextFilter) => {
        this.gameObjectsService.setFilter(nextFilter);
      });

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
    this.e7buffSelectionsSubject.next(nextItemSelections);
  }

  async handleE7roleSelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7roleSelectionsSubject.next(nextItemSelections);
  }
}
