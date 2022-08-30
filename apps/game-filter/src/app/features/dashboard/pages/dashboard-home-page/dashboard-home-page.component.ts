import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as R from 'rambda';
import { map, Observable, of, Subject, tap, withLatestFrom } from 'rxjs';

import produce from 'immer';
import { WritableDraft } from 'immer/dist/types/types-external';
import { ItemAnalytic } from '../../../../interfaces/analytics.interface';
import {
  E7Buff,
  E7Element,
  E7Hero,
  E7Rarity,
  E7Role
} from '../../../../interfaces/e7.interface';
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

  e7elements$: Observable<E7Element[]> = of([]);
  e7elementAnalytics$: Observable<ItemAnalytic[]> = of([]);
  e7elementSelectionsSubject: Subject<ItemSelection[]> = new Subject();
  e7elementSelections$: Observable<ItemSelection[]> =
    this.e7elementSelectionsSubject.asObservable();

  e7rarities$: Observable<E7Rarity[]> = of([]);
  e7rarityAnalytics$: Observable<ItemAnalytic[]> = of([]);
  e7raritySelectionsSubject: Subject<ItemSelection[]> = new Subject();
  e7raritySelections$: Observable<ItemSelection[]> =
    this.e7raritySelectionsSubject.asObservable();
  // end of e7

  constructor(
    private route: ActivatedRoute,
    private gameObjectsQuery: GameObjectsQuery,
    private gameObjectsService: GameObjectsService
  ) {}

  ngOnInit(): void {
    this.gameName$ = this.gameObjectsQuery.gameName$;

    this.filter$ = this.gameObjectsQuery.filter$;
    this.filteredGameObjects$ = this.gameObjectsQuery.filteredGameObjects$;

    // e7 stuff
    this.e7buffs$ = this.gameObjectsQuery.e7buffs$;
    this.e7buffAnalytics$ = this.gameObjectsQuery.e7buffAnalytics$;
    this.e7roles$ = this.gameObjectsQuery.e7roles$;
    this.e7roleAnalytics$ = this.gameObjectsQuery.e7roleAnalytics$;
    this.e7elements$ = this.gameObjectsQuery.e7elements$;
    this.e7elementAnalytics$ = this.gameObjectsQuery.e7elementsAnalytics$;
    this.e7rarities$ = this.gameObjectsQuery.e7rarities$;
    this.e7rarityAnalytics$ = this.gameObjectsQuery.e7raritiesAnalytics$;

    const updateFilterGroup = (
      draft: WritableDraft<GameObjectsUIState['filter']>,
      filter: Record<string, any>,
      groupName: string
    ) => {
      if (R.isEmpty(filter)) {
        delete draft.groups[groupName];
      } else {
        draft.groups[groupName] = filter;
      }
    };

    this.e7raritySelections$
      .pipe(
        withLatestFrom(this.filter$),
        map(([nextItemSelections, currentFilter]) => {
          const filter = itemSelectionsToFilter(
            nextItemSelections,
            'or',
            (id: string) => parseInt(id, 10)
          );
          return produce(currentFilter, (draft) => {
            const groupName = 'rarity';
            updateFilterGroup(draft, filter, groupName);
          });
        }),
        tap((nextFilter) => this.gameObjectsService.setFilter(nextFilter)),
        untilDestroyed(this)
      )
      .subscribe();
    this.e7buffSelections$
      .pipe(
        withLatestFrom(this.filter$),
        map(([nextItemSelections, currentFilter]) => {
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
        tap((nextFilter) => this.gameObjectsService.setFilter(nextFilter)),
        untilDestroyed(this)
      )
      .subscribe();
    this.e7roleSelections$
      .pipe(
        withLatestFrom(this.filter$),
        map(([nextItemSelections, currentFilter]) => {
          const filter = itemSelectionsToFilter(nextItemSelections, 'or');
          return produce(currentFilter, (draft) => {
            const groupName = 'role';
            updateFilterGroup(draft, filter, groupName);
          });
        }),
        tap((nextFilter) => this.gameObjectsService.setFilter(nextFilter))
      )
      .subscribe();
    this.e7elementSelections$
      .pipe(
        withLatestFrom(this.filter$),
        map(([nextItemSelections, currentFilter]) => {
          const filter = itemSelectionsToFilter(nextItemSelections, 'or');
          return produce(currentFilter, (draft) => {
            const groupName = 'attribute';
            updateFilterGroup(draft, filter, groupName);
          });
        }),
        tap((nextFilter) => this.gameObjectsService.setFilter(nextFilter))
      )
      .subscribe();
    // end of e7

    this.route.params
      .pipe(
        map<DashboarddRouteParams, DashboarddRouteParams['gameName']>(
          ({ gameName }) => gameName
        ),
        untilDestroyed(this)
      )
      .subscribe((gameName) => {
        if (gameName === 'e7') {
          this.gameObjectsService.setGameName(gameName);
          this.gameObjectsService
            .getGameObjects(gameName, 'heroes')
            .pipe(untilDestroyed(this))
            .subscribe();
        } else {
          this.gameObjectsService.resetUIState();
          this.gameObjectsService.removeGameObjects();
          this.gameObjectsService.setGameName(gameName);
        }
      });
  }

  ngOnDestroy(): void {
    this.gameObjectsService.resetUIState();
    this.gameObjectsService.removeGameObjects();
  }

  handleE7buffSelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7buffSelectionsSubject.next(nextItemSelections);
  }

  handleE7roleSelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7roleSelectionsSubject.next(nextItemSelections);
  }

  handleE7elementSelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7elementSelectionsSubject.next(nextItemSelections);
  }

  handleE7raritySelectionChange(nextItemSelections: ItemSelection[]) {
    this.e7raritySelectionsSubject.next(nextItemSelections);
  }
}
