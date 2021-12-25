import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'data-source',
    component: DataSourceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
