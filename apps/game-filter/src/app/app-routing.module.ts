import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './features/foo/foo/foo.component';

const routes: Routes = [
  {
    path: '',
    component: FooComponent,
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
