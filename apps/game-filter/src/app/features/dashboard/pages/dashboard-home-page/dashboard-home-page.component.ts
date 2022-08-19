import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';

import { MainLayoutService } from '../../../../layouts/main-layout/state/main-layout.service';

interface DashboarddRouteParams {
  gameName?: string;
}

@Component({
  selector: 'game-filter-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHomePageComponent implements OnInit {
  gameName$: Observable<string | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private mainLayoutService: MainLayoutService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          return params as DashboarddRouteParams;
        }),
        tap((params) => {
          this.mainLayoutService.setSelectedGameName(params.gameName);
        })
      )
      .subscribe((params) => {
        this.gameName$ = of(params.gameName || null);
        this.cdr.markForCheck();
      });
  }
}
