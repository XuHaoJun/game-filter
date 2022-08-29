import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import produce from 'immer';
import { fromInput } from 'observable-from-input';
import {
  ascend as _ascend,
  descend as _descend,
  sortWith as _sortWith
} from 'ramda';
import { combineLatest, map, Observable, of } from 'rxjs';

import { ItemAnalytic } from '../../interfaces/analytics.interface';
import { E7Buff, E7Role } from '../../interfaces/e7.interface';
import { ItemSelection } from '../../interfaces/selection.interface';
import {
  E7BoolGroupListQuery,
  E7BoolGroupListStore
} from './e7-bool-group-list.state';

interface DataSourceItem<T> {
  value: T;
  itemId: string;
  analytic: ItemAnalytic;
  selection: ItemSelection;
}

@UntilDestroy()
@Component({
  selector: 'game-filter-e7-bool-group-list',
  templateUrl: './e7-bool-group-list.component.html',
  styleUrls: ['./e7-bool-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [E7BoolGroupListStore, E7BoolGroupListQuery],
})
export class E7BoolGroupListComponent implements OnInit {
  @Input() dataType: 'buff' | 'role' = 'buff';

  @Input() dataSource: E7Buff[] | E7Role[] = [];
  private dataSource$: Observable<E7Buff[] | E7Role[]> = of([]);

  @Input() itemAnalytics: ItemAnalytic[] = [];
  private itemAnalytics$: Observable<ItemAnalytic[]> = of([]);

  @Input() itemSelections: ItemSelection[] = [];
  private itemSelections$: Observable<ItemSelection[]> = of([]);

  @Output() selectionsChange = new EventEmitter<ItemSelection[]>();

  _dataSource$: Observable<
    DataSourceItem<E7Buff>[] | DataSourceItem<E7Role>[]
  > = of([]);
  public E7BuffItems!: DataSourceItem<E7Buff>[];
  public E7RoleItems!: DataSourceItem<E7Role>[];

  constructor() {
    this.dataSource$ = fromInput<E7BoolGroupListComponent>(this)('dataSource');
    this.itemAnalytics$ =
      fromInput<E7BoolGroupListComponent>(this)('itemAnalytics');
    this.itemSelections$ =
      fromInput<E7BoolGroupListComponent>(this)('itemSelections');
  }

  ngOnInit(): void {
    this._dataSource$ = combineLatest([
      this.dataSource$,
      this.itemAnalytics$,
      this.itemSelections$,
    ]).pipe(
      map(([xs, ys, zs]) => {
        return xs.map((x) => {
          const itemId = x.id;

          const defaultAanlytic: ItemAnalytic = {
            itemId: x.id,
            gameObjectIds: [],
            usedRate: 0,
            count: 0,
            totalAnalytic: {
              numGameObjects: 0,
              numItemCount: 0,
            },
          };
          const analytic = ys.find((y) => y.itemId === x.id) || defaultAanlytic;

          const defaultSelection: ItemSelection = {
            itemId: x.id,
            isSelected: false,
            not: false,
          };
          const selection =
            zs.find((z) => z.itemId === x.id) || defaultSelection;

          return { value: x, itemId, analytic, selection };
        });
      }),
      map((ds) => {
        return _sortWith(
          [
            _descend((x) => x.analytic.count),
            _ascend((x) => x.selection.selectedAt?.getTime() || Infinity),
          ],
          ds
        );
      }),
      untilDestroyed(this)
    );
  }

  handleClickListItem(event: MouseEvent, item: DataSourceItem<unknown>) {
    const clickedAt = new Date();
    const foundIdx = this.itemSelections.findIndex(
      (x) => x.itemId === item.itemId
    );
    let nextItemSelections: ItemSelection[];
    if (foundIdx > -1) {
      const found = this.itemSelections[foundIdx];
      const nextIsSelected = !found.isSelected;
      nextItemSelections = produce(this.itemSelections, (draft) => {
        draft[foundIdx] = {
          itemId: found.itemId,
          isSelected: nextIsSelected,
          not: found.not,
        };
        if (nextIsSelected) {
          draft[foundIdx].selectedAt = clickedAt;
        } else {
          delete draft[foundIdx].selectedAt;
        }
      });
    } else {
      nextItemSelections = [
        ...this.itemSelections,
        {
          itemId: item.itemId,
          isSelected: true,
          not: false,
          selectedAt: clickedAt,
        },
      ];
    }
    this.selectionsChange.emit(nextItemSelections);
  }
}
