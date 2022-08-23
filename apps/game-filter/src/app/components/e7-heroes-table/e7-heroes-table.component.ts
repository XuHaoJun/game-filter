import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { E7Hero } from '../../interfaces/e7.interface';

@Component({
  selector: 'game-filter-e7-heroes-table',
  templateUrl: './e7-heroes-table.component.html',
  styleUrls: ['./e7-heroes-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E7HeroesTableComponent implements OnInit {
  @Input() dataSource: E7Hero[] = [];
  @Input() displayedColumns: string[] = [
    'name',
    'rarity',
    'attribute',
    'role',
    'allBuffs',
  ];

  public E7Hero!: E7Hero;

  constructor() {}

  ngOnInit(): void {}
}
