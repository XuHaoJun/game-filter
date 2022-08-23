import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'game-filter-e7-bool-group-list',
  templateUrl: './e7-bool-group-list.component.html',
  styleUrls: ['./e7-bool-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class E7BoolGroupListComponent implements OnInit {
  @Input() dataSource: any[] = [];



  constructor() {}

  ngOnInit(): void {}
}
