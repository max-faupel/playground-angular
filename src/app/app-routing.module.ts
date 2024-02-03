import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './navigation/table/table.component';
import { NestedNavigationComponent } from './navigation/nested-navigation/nested-navigation.component';
import { DashboardComponent } from './navigation/nested-navigation/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'nested-navigation',
        component: NestedNavigationComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
