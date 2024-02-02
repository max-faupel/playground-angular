import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
