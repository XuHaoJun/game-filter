import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { GameObjectsQuery } from '../../features/dashboard/state/game-objects.query';
import { GameObjectsService } from '../../features/dashboard/state/game-objects.service';

@UntilDestroy()
@Component({
  selector: 'game-filter-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  gameName$: Observable<string | undefined> = of(undefined);

  constructor(
    private gameObjectsQuery: GameObjectsQuery,
    private gameObjectsService: GameObjectsService
  ) {}

  ngOnInit(): void {
    this.gameName$ = this.gameObjectsQuery.gameName$;
  }

  handleGoHomeClick(event?: MouseEvent) {
    this.gameObjectsService.setGameName(undefined);
  }
}
