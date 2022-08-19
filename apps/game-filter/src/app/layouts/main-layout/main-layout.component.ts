import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainLayoutQuery } from './state/main-layout.query';
import { MainLayoutService } from './state/main-layout.service';

@Component({
  selector: 'game-filter-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  selectedGameName$: Observable<string | null> = of(null);

  constructor(
    private mainLayoutQuery: MainLayoutQuery,
    private mainLayoutService: MainLayoutService
  ) {}

  ngOnInit(): void {
    this.selectedGameName$ = this.mainLayoutQuery.selectedGameName$;
  }

  handleGoHomeClick(event?: MouseEvent) {
    this.mainLayoutService.setSelectedGameName(null);
  }
}
