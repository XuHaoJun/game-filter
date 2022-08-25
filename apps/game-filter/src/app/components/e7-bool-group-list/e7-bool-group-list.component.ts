import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import produce from 'immer';
import { fromInput } from 'observable-from-input';
import { combineLatest, map, Observable, of } from 'rxjs';

import { ItemAnalytic } from '../../interfaces/analytics.interface';
import { E7Buff } from '../../interfaces/e7.interface';
import { ItemSelection } from '../../interfaces/selection.interface';

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
})
export class E7BoolGroupListComponent implements OnInit {
  @Input() dataType = 'buff';

  @Input() dataSource: E7Buff[] = [];
  private dataSource$: Observable<E7Buff[]> = of([]);

  @Input() itemAnalytics: ItemAnalytic[] = [];
  private itemAnalytics$: Observable<ItemAnalytic[]> = of([]);

  @Input() itemSelections: ItemSelection[] = [];
  private itemSelections$: Observable<ItemSelection[]> = of([]);

  @Output() selectionsChange = new EventEmitter<ItemSelection[]>();

  _dataSource$: Observable<DataSourceItem<E7Buff>[]> = of([]);

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
      untilDestroyed(this)
    );
  }

  handleClickListItem(event: MouseEvent, item: DataSourceItem<E7Buff>) {
    const clickedAt = new Date();
    const foundIdx = this.itemSelections.findIndex(
      (x) => x.itemId === item.itemId
    );
    let nextItemSelections: ItemSelection[];
    if (foundIdx > -1) {
      const found = this.itemSelections[foundIdx];
      nextItemSelections = produce(this.itemSelections, (draft) => {
        draft[foundIdx] = {
          itemId: found.itemId,
          isSelected: !found.isSelected,
          not: false,
          selectedAt: clickedAt,
        };
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
