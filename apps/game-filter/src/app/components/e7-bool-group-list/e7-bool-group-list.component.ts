import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { E7Buff } from '../../interfaces/e7.interface';

@Component({
  selector: 'game-filter-e7-bool-group-list',
  templateUrl: './e7-bool-group-list.component.html',
  styleUrls: ['./e7-bool-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E7BoolGroupListComponent implements OnInit {
  @Input() dataType = 'buff';
  @Input() dataSource: E7Buff[] = [];

  constructor() {}

  ngOnInit(): void {}
}
